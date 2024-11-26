import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo_small from "../images/logo_small.png";
import GithubIcon from "./GithubIcon"

/*
 * Navigation Component.
 * This component use React-Bootstrap Nav component to create NavBar.
 */
const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand className="ms-3" href="/cryptolearn/#/">
        <img
          alt=""
          src={logo_small}
          width="32"
          height="32"
          className="d-inline-block align-top"
        />
        &nbsp;&nbsp;CryptoLearn
      </Navbar.Brand>
      <Nav className="m-auto pe-5">
        <Nav.Link href="/cryptolearn/#/">Home</Nav.Link>
        <NavDropdown title=" Blocks" id="blocks-nav-dropdown">
          <NavDropdown.Item href="/cryptolearn/#/hash">Hash</NavDropdown.Item>
          <NavDropdown.Item href="/cryptolearn/#/block">Block</NavDropdown.Item>
          <NavDropdown.Item href="/cryptolearn/#/blockchain">
            Blockchain
          </NavDropdown.Item>
          <NavDropdown.Item href="/cryptolearn/#/distributed">
            Distributed
          </NavDropdown.Item>
          <NavDropdown.Item href="/cryptolearn/#/tokens">
            Tokens
          </NavDropdown.Item>
          <NavDropdown.Item href="/cryptolearn/#/coinbase">
            Coinbase
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Keys" id="blocks-nav-dropdown">
          <NavDropdown.Item href="/cryptolearn/#/keys">Keys</NavDropdown.Item>
          <NavDropdown.Item href="/cryptolearn/#/signatures">
            Signatures
          </NavDropdown.Item>
          <NavDropdown.Item href="/cryptolearn/#/transactions">
            Transactions
          </NavDropdown.Item>
          <NavDropdown.Item href="/cryptolearn/#/signedblockchain">
            Signed Blockchains
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav className="px-5">
        <Nav.Link
          href="https://github.com/birkagal/cryptolearn"
          target="_blank"
        >
          <GithubIcon/>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
