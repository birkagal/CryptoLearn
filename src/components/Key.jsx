import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Form,
  Col,
  Row,
  Tabs,
  Tab,
  Container,
  TabContent,
} from "react-bootstrap";
import { fetch_data } from "../javascript/fetch_api";
import settings from "../javascript/global_settings";
/*
 * This component is used to create the Keys View.
 * The component receive several prop flags which control what part of the element to show.
 */
const Key = ({ page_title, flags, default_transaction }) => {
  const [privateKey, setPrivateKey] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [data, setData] = useState(flags.tx ? default_transaction : "");
  const [signSignature, setSignSignature] = useState("");
  const [verifySignature, setVerifySignature] = useState("");
  const [bg, setBg] = useState(settings.bg_colors.header);

  /*
   * This function called once when the component is starting. It use's
   * fetch_data API to get a random private key from the database.
   */
  useEffect(() => {
    fetch_data("key/getpriv").then((rv) => setPrivateKey(rv.key));
  }, []);

  /*
   * This function called each time privateKey state change's. It use's
   * fetch_data API to get a the matching public key from the server.
   */
  useEffect(() => {
    fetch_data("key/getpub").then((rv) => setPublicKey(rv.key));
  }, [privateKey]);

  /*
   * This function called each time signSignature state change's.
   * It link's between Sign signature and Verify signatrue in one way: verify change's based on sign,
   * but sign doesnt change's when verify change.
   */
  useEffect(() => {
    setVerifySignature(signSignature);
  }, [signSignature]);

  /*
   * This function called a data element is changed and it used to reset background color back to default.
   */
  useEffect(() => {
    setBg(settings.bg_colors.header);
  }, [publicKey, data, verifySignature]);

  /*
   * This function update the key pair at the client, and at the database. Each time the private key change's,
   * the fetch_data API is called to update the new key at the server. After the update is complete, the new
   * Private key is also updated at the client using Set function.
   */
  const update_key = async (key) => {
    fetch_data(`key/update/${key}`).then(
      (rv) => rv.priv && setPrivateKey(rv.priv)
    );
  };

  /*
   * This function use the fetch_data API to send the component data to the server. the Server sign
   * the data using the Key-pair, and then return the signature to the client.
   */
  const sign_data = () => {
    let params;
    flags.tx
      ? (params = Number(data.amount).toFixed(2) + publicKey + data.to)
      : (params = data.replace(/\\n/g, ""));
    fetch_data(`key/sign/${params}`).then((rv) =>
      setSignSignature(rv.signature)
    );
  };

  /*
   * This function use the fetch_data API to verify a signature is valid. It send's the public key,
   * signatures and data to the server which return wheater the signature is verified or not.
   */
  const verify_data = () => {
    let params;
    flags.tx
      ? (params = Number(data.amount).toFixed(2) + publicKey + data.to)
      : (params = data.replace(/\\n/g, ""));
    fetch_data(`key/verify/${publicKey}/${verifySignature}/${params}`).then(
      (rv) => {
        rv.status
          ? setBg(settings.bg_colors.ok)
          : setBg(settings.bg_colors.bad);
      }
    );
  };

  return (
    <Container>
      <Card style={{ width: "70rem" }}>
        <Card.Header style={{ backgroundColor: settings.bg_colors.header }}>
          <h3>{page_title}</h3>
        </Card.Header>
        <Card.Body style={{ backgroundColor: bg }}>
          <Form>
            {flags.keys && (
              <>
                {/* If the flags.keys is on, display the Key-pair generator page */}
                <Form.Label htmlFor="privkey">Private Key: </Form.Label>
                <Row className="mb-3">
                  <Col xs={10}>
                    <Form.Control
                      id="privkey"
                      autoComplete="off"
                      value={privateKey}
                      onChange={(e) => update_key(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Button
                      variant="primary"
                      onClick={() => update_key("random")}
                    >
                      Random
                    </Button>
                  </Col>
                </Row>
                <Form.Label>Public Key: </Form.Label>
                <Form.Control value={publicKey} disabled="disabled" />
              </>
            )}

            {!flags.keys && (
              // Create different Tabs for Sign and Verify view
              <Tabs defaultActiveKey="sign">
                <Tab eventKey="sign" title="Sign">
                  {flags.tx && (
                    <Row className="mb-3 mt-3">
                      <Form.Label column>Transaction:$</Form.Label>
                      <Col xs={2}>
                        <Form.Control
                          type="number"
                          step="0.5" // Set the + - controls step to 0.5
                          autoComplete="off"
                          value={data.amount}
                          onChange={(e) =>
                            setData({
                              ...data,
                              amount: Number(e.target.value).toFixed(2), // Convert String to Number and add 2 decimal places
                            })
                          }
                        />
                      </Col>
                      <Form.Label column>From:</Form.Label>
                      <Col xs={3}>
                        <Form.Control
                          autoComplete="off"
                          value={publicKey}
                          onChange={
                            (e) =>
                              setPublicKey(e.target.value.replaceAll("/", "")) // Remove problematic characters
                          }
                        />
                      </Col>
                      <Form.Label column>{"----------->"}</Form.Label>
                      <Col xs={3}>
                        <Form.Control
                          autoComplete="off"
                          value={data.to}
                          onChange={(e) =>
                            setData({
                              ...data,
                              to: e.target.value.replaceAll("/", ""), // Remove problematic characters
                            })
                          }
                        />
                      </Col>
                    </Row>
                  )}
                  {!flags.tx && (
                    <Row className="mb-3 mt-3">
                      <Form.Label htmlFor="sign-message">Message: </Form.Label>
                      <Form.Control
                        id="sign-message"
                        as="textarea"
                        rows={4} // Set the Message as 4 rows textarea
                        autoComplete="off"
                        value={data}
                        onChange={
                          (e) => setData(e.target.value.replaceAll("/", "")) // Remove problematic characters
                        }
                      />
                    </Row>
                  )}
                  <Row className="mb-3">
                    <Form.Label htmlFor="priv">Private Key:</Form.Label>
                    <Form.Control
                      id="priv"
                      autoComplete="off"
                      value={privateKey}
                      onChange={
                        (e) => update_key(e.target.value.replaceAll("/", "")) // Remove problematic characters
                      }
                    />
                  </Row>
                  <Row className="mb-3 p-2">
                    <Button variant="primary" onClick={sign_data}>
                      Sign
                    </Button>
                  </Row>
                  <Form.Label>
                    {flags.tx ? "Transaction" : "Message"} Signature:
                  </Form.Label>
                  <Form.Control value={signSignature} disabled="disabled" />
                </Tab>
                <Tab eventKey="verify" title="Verify">
                  <TabContent>
                    {flags.tx && (
                      <Row className="pb-3 mt-3">
                        <Form.Label column>Transaction:$</Form.Label>
                        <Col xs={2}>
                          <Form.Control
                            type="number"
                            step="0.5" // Set the + - controls step to 0.5
                            autoComplete="off"
                            value={data.amount}
                            onChange={(e) =>
                              setData({
                                ...data,
                                amount: Number(e.target.value).toFixed(2), // Convert String to Number and add 2 decimal places
                              })
                            }
                          />
                        </Col>
                        <Form.Label column>From:</Form.Label>
                        <Col xs={3}>
                          <Form.Control
                            autoComplete="off"
                            value={publicKey}
                            onChange={
                              (e) =>
                                setPublicKey(e.target.value.replaceAll("/", "")) // Remove problematic characters
                            }
                          />
                        </Col>
                        <Form.Label column>{"----------->"}</Form.Label>
                        <Col xs={3}>
                          <Form.Control
                            autoComplete="off"
                            value={data.to}
                            onChange={(e) =>
                              setData({
                                ...data,
                                to: e.target.value.replaceAll("/", ""), // Remove problematic characters
                              })
                            }
                          />
                        </Col>
                      </Row>
                    )}
                    {!flags.tx && (
                      <>
                        <Row className="mb-3 mt-3">
                          <Form.Label htmlFor="verify-message">
                            Message:
                          </Form.Label>
                          <Form.Control
                            id="verify-message"
                            as="textarea"
                            rows={4} // Set the Message as 4 rows textarea
                            autoComplete="off"
                            value={data}
                            onChange={
                              (e) => setData(e.target.value.replaceAll("/", "")) // Remove problematic characters
                            }
                          />
                        </Row>
                        <Row className="mb-3">
                          <Form.Label htmlFor="pub">Public Key: </Form.Label>
                          <Form.Control
                            id="pub"
                            autoComplete="off"
                            value={publicKey}
                            onChange={
                              (e) =>
                                setPublicKey(e.target.value.replaceAll("/", "")) // Remove problematic characters
                            }
                          />
                        </Row>
                      </>
                    )}
                    <Row className="mb-3 mt-3">
                      <Form.Label htmlFor="sig">Signature: </Form.Label>
                      <Form.Control
                        id="sig"
                        value={verifySignature}
                        onChange={
                          (e) =>
                            setVerifySignature(
                              e.target.value.replaceAll("/", "")
                            ) // Remove problematic characters
                        }
                      />
                    </Row>
                    <Row className="p-2">
                      <Button variant="primary" onClick={verify_data}>
                        Verify
                      </Button>
                    </Row>
                  </TabContent>
                </Tab>
              </Tabs>
            )}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Key;
