import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

/* Simple 404 Error page view. Show message and point user back to Home screen */
const Error = () => {
  return (
    <Container className="text-center">
      <h1>Oops!</h1>
      <h2>404 Not Found</h2>
      <h6>This page was not found!</h6>
      <Link to="/" className="btn btn-primary">
        Home Page
      </Link>
    </Container>
  );
};

export default Error;
