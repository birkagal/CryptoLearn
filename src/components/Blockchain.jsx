import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Block from "./Block";
import data from "../javascript/default_data";
/*
 * Blockchain Component.
 * This component is used to create Blockchain Views. Each Block is rendered using Block component,
 * and each view use's different flags to show different elements. Those flags are provided as props.
 */
const Blockchain = ({ page_title, peer_title, flags }) => {
  /* The Block flags. Use default Blockchain flags alongside props "flags" provided by parent View. */
  const block_flags = {
    ...flags,
    id: true,
    nonce: true,
    prev: true,
    chain: true,
    mine: true,
  };
  var prev_hashes_setters = [...Array(5)]; // Array with 5 places, used to store the SetPrevHash function from each block.

  /* This function would be passed to the Block component to be called each time the Hash changes.
   * When a block change Hash, this function is called with the new Hash and the block Id.
   * It uses the prev_hashes_setters array to set the PrevHash state of the next block with the new Hash.
   */
  const set_next_prev_hash = (index, hash) => {
    if (index === 1) {
      prev_hashes_setters[index - 1]("0".repeat(64)); // The first block has list of zeroes as prevHash.
    }
    /*
     * Verify that the index is less then 5 (fifth block doesnt effect others),
     * and the block finished loading and passed the Setter function
     */
    if (index < 5) {
      if (prev_hashes_setters[index]) {
        prev_hashes_setters[index](hash);
      }
    }
  };

  /* This function is used by childern to provide it's setPrevHash function. It saves the function
   * in the prev_hashes_setters array to be used each time the Hash change's.
   */
  const add_prev_hash_setter = (index, setPrevHash) => {
    prev_hashes_setters[index - 1] = setPrevHash;
  };

  return (
    <Container fluid>
      <h1>{page_title}</h1>
      <h4>{peer_title}</h4>
      {/* Use flex-nowrap and overflowX scroll to enable horizontal scrolling on blockchain. */}
      <Row className="flex-nowrap" style={{ overflowX: "scroll" }}>
        {data.map((block, index) => {
          return (
            // Each Block in the data is created using Block component in it's own Column.
            <Col key={index} className="pb-2">
              <Block
                {...block}
                flags={block_flags}
                id={index + 1}
                set_next_prev_hash={set_next_prev_hash}
                add_prev_hash_setter={add_prev_hash_setter}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Blockchain;
