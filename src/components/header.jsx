import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Header = () => {
  // const [showGreeting, setShowGreeting] = useState(false);

  return (
    <header>
      <Container>
        <Row
          className="d-flex justify-content-between"
        >
          <Col
            md={7}
            className="text-center text-md-left order-0"
          >
            <h1>Elizabeth Clohosey</h1>
            {/* <!-- <p>Fullstack Software Engineer</p> --> */}
          </Col>
          <Col
            md={3}
            className="d-flex justify-content-center order-3 order-md-2"
          >
            <AiFillGithub style={{ color: "#fafafa", fontSize: '2rem', marginRight: '.5rem'}} />
            <FaLinkedin style={{ color: "#00A0dc", fontSize: '2rem', marginRight: '.5rem'}} />
            <FaFacebook style={{ color: "#3b5998", fontSize: '2rem' }} />
            {/* <ion-icon name="logo-github" style={{color: 'red'}}></ion-icon>
              <ion-icon name="logo-linkedin" style={{color: 'green'}}></ion-icon>
              <ion-icon name="logo-facebook" style={{color: 'blue'}}></ion-icon> */}
          </Col>
          <Col
            lg={12}
            className="d-flex justify-content-between order-2"
          >
            <p style={{color: 'white', marginTop: '-15px', fontWeight: '800'}}>Fullstack Software Engineer</p>
          </Col>
        </Row>
      </Container>
      {/* <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1>
      <h1>Testing Overflow</h1> */}
    </header>
  );
};

export default Header;
