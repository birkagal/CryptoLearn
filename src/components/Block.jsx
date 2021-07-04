import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Form,
  Col,
  Row,
  Container,
  Spinner,
} from "react-bootstrap";
import SHA256 from "crypto-js/sha256";
import { fetch_data } from "../javascript/fetch_api";
import settings from "../javascript/global_settings";
/*
 * Block Component.
 * This component receive several props which control what part of the Block to show.
 * It can show various parts of the Block, and update the data dynamically.
 */
const Block = ({
  page_title,
  flags,
  id,
  default_nonces,
  default_nonce,
  default_coinbase,
  default_transaction,
  add_prev_hash_setter,
  set_next_prev_hash,
}) => {
  const [index, setIndex] = useState(id ? id : 1);

  /*
   * The nonce can be provided in several ways. First check if flags.id is set to check if Nonce is needed,
   * then look for the correct prop which hold Nonce default value.
   */
  const [nonce, setNonce] = useState(
    flags.id
      ? default_nonce
        ? default_nonce
        : flags.sign
        ? default_nonces.signed_nonce
        : flags.coinbase
        ? default_nonces.coinbase_nonce
        : flags.tx
        ? default_nonces.transactional_nonce
        : default_nonces.empty_nonce
      : 0
  );
  /*
   * First check if flags.coinbase is on. If yes, check if the flags.sign is on to determine
   * Between encrypted signature name or plain text name.
   */
  const [coinbase, setCoinbase] = useState(
    flags.coinbase
      ? flags.sign
        ? { amount: default_coinbase.amount, key: default_coinbase.key }
        : { amount: default_coinbase.amount, name: default_coinbase.name }
      : ""
  );
  const [data, setData] = useState(flags.tx ? default_transaction : "");
  const [prevHash, setPrevHash] = useState("");
  const [hash, setHash] = useState("");
  const [bg, setBg] = useState(settings.bg_colors.header);
  const [loading, setLoading] = useState(false);

  /*
   * This is the mining function. It assembly all the block parts as one string and use fetch_data api
   * to get the desired nonce from the server.
   */
  const mine = () => {
    setLoading(true);
    let data_without_breaks = JSON.stringify(data).replace(/\\n/g, ""); // Remove problematic URI characters
    let params =
      index + JSON.stringify(coinbase) + data_without_breaks + prevHash;
    fetch_data(`mine/${params}/${settings.difficulty}`).then((rv) => {
      setNonce(rv.nonce);
      setLoading(false);
    });
  };

  /*
   * This function update the Data state. The parameters are new value and it's key,
   * as well as the current index. We create a copy of the current Data state and insert the new value.
   * We check for relevent flags and either verify that the new transaction is valid using fetch_data API
   * from the server, or just update the Data state with the new values.
   */
  const update_data = (key, value, index) => {
    let dataCopy = [...data]; // Copy data to new variable and update the key-value.
    if (key !== "amount") flags.sign && (key += "Key");
    dataCopy[index][key] = value;
    dataCopy[index].amount = Number(dataCopy[index].amount).toFixed(2); // Convert String to Number and add 2 decimal places
    if (flags.sign) {
      let params =
        dataCopy[index].amount +
        dataCopy[index].fromKey +
        dataCopy[index].toKey;
      fetch_data(
        `key/verify/${dataCopy[index].fromKey}/${dataCopy[index].signature}/${params}`
      ).then((verified) => {
        dataCopy[index].verified = verified.status;
        setData(dataCopy);
      });
    } else {
      setData(dataCopy);
    }
  };

  /*
   * This function is called once when the component is created, sending the setPrevHash function back
   * to the parent in order to change PrevHash state based on other block's state.
   */
  useEffect(() => {
    if (flags.prev) {
      add_prev_hash_setter(id, setPrevHash);
    }
  }, [flags.prev, add_prev_hash_setter, setPrevHash, id]);

  /*
   * This function is called every time Hash state changes. Once the state change's, the set_next_prev_hash
   * function is activated on the parent with the id and hash sent as parameters. The parent then change's
   * the PrevHash state of the relevent blocks.
   */
  useEffect(() => {
    if (flags.prev) {
      set_next_prev_hash(id, hash);
    }
  }, [hash, flags.prev, set_next_prev_hash, id]);

  /*
   * This function is called every time there is a data change that require a new Hash to be computed.
   * The block parts are used to created a String, and using fetch_data API the server return the
   * calculated hash. The background is set according to that new Hash. (Green) for Mined block, (Red) otherwise.
   */
  useEffect(() => {
    let data_without_breaks = JSON.stringify(data).replace(/\\n/g, ""); // Remove problematic URI characters
    let params =
      index + JSON.stringify(coinbase) + data_without_breaks + prevHash + nonce;
    let new_hash = SHA256(params).toString();
    setHash(new_hash);
    if (flags.id) {
      if (
        new_hash.substring(0, settings.difficulty) !==
        Array(settings.difficulty + 1).join("0") // Check if the new Hash has enough leading zeros.
      ) {
        setBg(settings.bg_colors.bad);
      } else {
        setBg(settings.bg_colors.ok);
      }
    }
    // fetch_data(`hash/${params}`).then((rv) => {
    //   setHash(rv.hash);
    //   if (flags.id) {
    //     if (
    //       rv.hash.substring(0, settings.difficulty) !==
    //       Array(settings.difficulty + 1).join("0") // Check if the new Hash has enough leading zeros.
    //     ) {
    //       setBg(settings.bg_colors.bad);
    //     } else {
    //       setBg(settings.bg_colors.ok);
    //     }
    //   }
    // });
  }, [index, nonce, coinbase, data, prevHash, flags.id]);

  return (
    <Container>
      <Card
        className="mx-auto"
        style={{ width: flags.chain ? "40rem" : "100%" }} // Check for flags.chain flag to determine size of card
      >
        {!flags.chain && (
          <Card.Header style={{ backgroundColor: settings.bg_colors.header }}>
            <h3>{page_title}</h3>
          </Card.Header>
        )}
        <Card.Body style={{ backgroundColor: bg }}>
          <Form>
            {flags.id && (
              <Row className="mb-3">
                <Form.Label htmlFor="index" column>
                  Block:
                </Form.Label>
                <Col xs="10">
                  <Form.Control
                    id="index"
                    type="number"
                    autoComplete="off"
                    min="1" // Indices start from 1
                    value={index}
                    onChange={(e) => setIndex(e.target.value)}
                  />
                </Col>
              </Row>
            )}

            {flags.nonce && (
              <Row className="mb-3">
                <Form.Label htmlFor="nonce" column>
                  Nonce:
                </Form.Label>
                <Col xs="10">
                  <Form.Control
                    id="nonce"
                    type="number"
                    autoComplete="off"
                    value={nonce}
                    onChange={(e) => setNonce(e.target.value)}
                  />
                </Col>
              </Row>
            )}

            {flags.coinbase && (
              <Row className="mb-3">
                <Form.Label htmlFor="coinbase" column>
                  Coinbase:
                </Form.Label>
                <Col xs={4}>
                  <Form.Control
                    id="coinbase"
                    type="number"
                    autoComplete="off"
                    step="0.5" // Set the + - controls step to 0.5
                    value={coinbase.amount}
                    onChange={(e) =>
                      setCoinbase({
                        ...coinbase,
                        amount: Number(e.target.value).toFixed(2), // Convert String to Number and add 2 decimal places
                      })
                    }
                  />
                </Col>
                <Form.Label column>{"------>"}</Form.Label>
                <Col xs={4}>
                  <Form.Control
                    autoComplete="off"
                    value={flags.sign ? coinbase.key : coinbase.name}
                    onChange={(e) =>
                      flags.sign
                        ? setCoinbase({ ...coinbase, key: e.target.value })
                        : setCoinbase({ ...coinbase, name: e.target.value })
                    }
                  />
                </Col>
              </Row>
            )}

            {!flags.tx && (
              <Row className="mb-3">
                <Form.Label htmlFor="data" column>
                  Data:
                </Form.Label>
                <Col xs={10}>
                  <Form.Control
                    id="data"
                    as="textarea"
                    rows={5} // Set the data as 5 rows textarea
                    autoComplete="off"
                    value={data}
                    onChange={
                      (e) => setData(e.target.value.replaceAll("/", "")) // Remove problematic characters
                    }
                  />
                </Col>
              </Row>
            )}

            {flags.tx && (
              <Row className="mb-3">
                <Form.Label htmlFor="tx" column>
                  Tx:
                </Form.Label>
                {data.map((tx) => {
                  return (
                    <React.Fragment key={tx.id}>
                      <Row>
                        <Form.Label column>$</Form.Label>
                        <Col xs={3}>
                          <Form.Control
                            type="number"
                            step="0.5" // Set the + - controls step to 0.5
                            autoComplete="off"
                            value={tx.amount}
                            onChange={(e) =>
                              update_data("amount", e.target.value, tx.id)
                            }
                          />
                        </Col>
                        <Form.Label column>From:</Form.Label>
                        <Col xs={3}>
                          <Form.Control
                            autoComplete="off"
                            value={flags.sign ? tx.fromKey : tx.from}
                            onChange={(e) =>
                              update_data("from", e.target.value, tx.id)
                            }
                          />
                        </Col>
                        <Form.Label column>{"->"}</Form.Label>
                        <Col xs={3}>
                          <Form.Control
                            size="sm"
                            autoComplete="off"
                            value={flags.sign ? tx.toKey : tx.to}
                            onChange={(e) =>
                              update_data("to", e.target.value, tx.id)
                            }
                          />
                        </Col>
                      </Row>
                      {flags.sign && (
                        <Row>
                          <Form.Label column>Sig:</Form.Label>
                          <Col xs={11}>
                            <Form.Control
                              disabled="disabled"
                              style={
                                tx.verified // Control text color according to verified flag
                                  ? { color: "black" }
                                  : { color: "red" }
                              }
                              value={tx.signature}
                              onChange={(e) =>
                                update_data("signature", e.target.value, tx.id)
                              }
                            />
                          </Col>
                        </Row>
                      )}
                    </React.Fragment>
                  );
                })}
              </Row>
            )}
            {flags.prev && (
              <Row className="mb-3">
                <Form.Label column>Prev:</Form.Label>
                <Col xs={10}>
                  <Form.Control value={prevHash} disabled="disabled" />
                </Col>
              </Row>
            )}

            <Row className="mb-3">
              <Form.Label column>Hash: </Form.Label>
              <Col xs={10}>
                <Form.Control value={hash} disabled="disabled" />
              </Col>
            </Row>
          </Form>
          {flags.mine && (
            <Container className="text-center">
              <Button onClick={mine} disabled={loading} size="lg">
                {"Mine\t"}
                {loading && (
                  <Spinner
                    className="ms-1"
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  /> // Create a Bootstrap spinner animation when loading
                )}
              </Button>
            </Container>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Block;
