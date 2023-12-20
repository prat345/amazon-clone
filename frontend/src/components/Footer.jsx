import React from "react";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";

function Footer() {
  return (
    <footer className="mt-5 py-4">
      <Container className="mb-5">
        <Row>
          <Col>
            <div>Fashions</div>
            <div>Lorem, ipsum dolor.</div>
            <div>Lorem ipsum dolor sit.</div>
          </Col>
          <Col>
            <div>Electronics</div>
            <div>Lorem </div>
            <div>Lorem ipsum</div>
          </Col>
          <Col>
            <div>Home Service</div>
            <div>Lorem, ipsum dolor.</div>
            <div>Lorem ipsum dolor sit.</div>
          </Col>
          <Col>
            <div>Amason Music</div>
            <div>Lorem ipsum dolor sit.</div>
            <div>Lorem, ipsum dolor.</div>
          </Col>
        </Row>
      </Container>
      <div className="text-center">
        All rights reserved <br />
        @177-7777, Amason.com
      </div>
    </footer>
  );
}

export default Footer;
