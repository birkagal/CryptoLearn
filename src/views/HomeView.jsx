import React from "react";
import { Container, Card } from "react-bootstrap";
import logo from "../images/logo.png";

/* This is the home page view. It show a small tutorial on how to use the website. */
const HomeView = () => {
  return (
    <Container className="text-center">
      <Card>
        <Card.Header>
          <h3>Welcome to CryptoLearn</h3>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            Simple web-based application for demonstration of blockchain
            concepts.
          </Card.Title>
          <Card.Text>
            This website created as a very basic visual introduction to the
            concepts behind a blockchain. We introduce the idea of hash, blocks,
            transaction and coinbase wallet using an interactive web demo. We
            also show the concept of Keys, Online signatures in a visual way.
          </Card.Text>
          <Card.Subtitle>
            <h4>How To Use</h4>
          </Card.Subtitle>
          <Card.Text>
            Use the nagivation bar at the top to navigate between different
            pages.
          </Card.Text>
          <Card.Subtitle>Hash Page</Card.Subtitle>
          <Card.Text>
            Hash page is used to understand the basics of the hash function. The
            website uses SHA256 as the function and you can type in the data
            input and look at the changes to the output.
          </Card.Text>
          <Card.Subtitle>Block Pages</Card.Subtitle>
          <Card.Text>
            After playing with Hash, you can start exploring the blocks and
            blockchain pages. Here we will build up out blockchain starting with
            a single Block, then adding up blocks into a blockchain. Next we
            distribute the blockchain to different peers and see the behaviour
            there. Lastly we add some Transaction instead of plain data and
            introduce the use of Wallet or Coinbase.
          </Card.Text>
          <Card.Subtitle>Keys Pages</Card.Subtitle>
          <Card.Text>
            After getting to know and playing with Blockchains, we introduce new
            conpect of Keys and Signatures. The first page allow you to play
            with key-pair generator using Elliptic Curve "secp256k1" to generate
            key-pair. Next, we use those key-pair to sign a message. You can
            verify that signature and see how any changes to the input result in
            failed verification (red background). Then we once again replace the
            plain data with Transactions, and the final page show the use of
            Blockchain from previous pages, along side Key and Signatures which
            makes every Transaction signed. Intresting thing to see is any
            changes made to any Transaction result in red color text to that
            transaction, meaning that the signature does not match that
            transaction. You can still Mine the block and get valid hash, But
            the transaction would remain Red meaning someone tempered with it.
          </Card.Text>
          <img src={logo} alt="website logo" width="128" height="128" />
          <span>
            <Card.Text inline>
              <h6 style={{ display: "inline" }}>
                {"Designed and built by "}
                <Card.Link
                  className="website-link"
                  href="https://www.birkagal.com"
                  target="_blank"
                >
                  Gal Birka
                </Card.Link>
                {" | "}
                <Card.Link
                  className="website-link m-0"
                  href="https://github.com/birkagal/cryptolearn"
                  target="_blank"
                >
                  Source
                </Card.Link>
              </h6>
            </Card.Text>
          </span>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HomeView;
