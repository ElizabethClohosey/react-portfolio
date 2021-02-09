import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Header = () => {
  // const [showGreeting, setShowGreeting] = useState(false);

  return (
    <header>
      <Container>
        <Row className="d-flex justify-content-between">
          <Col md={9} className="text-center text-md-left order-0">
            <h1 className="blink_me">Elizabeth Clohosey</h1>
          </Col>
          <Col
            md={3}
            className="d-flex justify-content-center align-items-center order-3 order-md-2"
          >
            <a href="https://github.com/ElizabethClohosey">
              <AiFillGithub className="header-icon" />
            </a>
            <a href="https://github.com/ElizabethClohosey">
              <FaLinkedin className="header-icon" />
            </a>
            <a href="https://github.com/ElizabethClohosey">
              <FaFacebook className="header-icon" />
            </a>
          </Col>
          <Col
            lg={12}
            className="text-center text-md-left order-2"
            style={{ color: "white", marginTop: "-15px", fontWeight: "800" }}
          >
            <p>Fullstack WebDeveloper</p>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
