import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Content = () => {
  // const [showGreeting, setShowGreeting] = useState(false);

  return (
    <section className="content">
      <Container className="d-flex flex-column">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="#"
            style={{
              border: "2px solid black",
              height: "200px",
              width: "200px",
              margin: "1rem auto 0",
            }}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginLeft: "auto" }}>
          <Card.Img
            variant="top"
            src="#"
            style={{
              border: "2px solid black",
              height: "200px",
              width: "200px",
              margin: "1rem auto 0",
            }}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="#"
            style={{
              border: "2px solid black",
              height: "200px",
              width: "200px",
              margin: "1rem auto 0",
            }}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", marginLeft: "auto" }}>
          <Card.Img
            variant="top"
            src="#"
            style={{
              border: "2px solid black",
              height: "200px",
              width: "200px",
              margin: "1rem auto 0",
            }}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </Container>

      <Container>
        <Card>
          <Row>
            <Col>Icon</Col>
            <Col>Icon</Col>
            <Col>Icon</Col>
            <Col>Icon</Col>
          </Row>
          <Card.Body>
            <Card.Title>Experience</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Row>
              <Col>Icon</Col>
              <Col>Icon</Col>
              <Col>Icon</Col>
              <Col>Icon</Col>
            </Row>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </Container>

      <Container>
        <Card>
          <Card.Img
            variant="top"
            src="#"
            style={{
              border: "2px solid black",
              height: "200px",
              width: "200px",
              margin: "1rem auto 0",
            }}
          />
          <Card.Body>
            <Card.Title>About Me</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Content;
