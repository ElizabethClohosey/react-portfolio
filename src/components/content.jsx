import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Zoom, Fade } from "react-reveal";

const Content = () => {
  // const [showGreeting, setShowGreeting] = useState(false);

  return (
    <section className="content">
      <Container className="d-flex flex-column">
        {/* My Projects Section - Project 1 */}
        <Zoom>
          <Card style={{ width: "18rem", marginBottom: "5rem" }}>
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
              <Card.Title>Project One</Card.Title>
              <Card.Text>Short project description</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Zoom>

        {/* My Projects Section - Project 2 */}
        <Zoom>
          <Card
            style={{ width: "18rem", marginLeft: "auto", marginBottom: "5rem" }}
          >
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
              <Card.Title>Project Two</Card.Title>
              <Card.Text>
                <p>Short project description</p>
                <p>
                  Some quick example text to build on the project title and make
                  up the bulk of the card's content. 
                </p>
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Zoom>

        {/* My Projects Section - Project 3 */}
        <Fade left>
          <Card style={{ width: "18rem", marginBottom: "5rem" }}>
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
              <Card.Title>Project Three</Card.Title>
              <Card.Text>
              Short project description
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Fade>

        {/* My Projects Section - Project 4 */}
        <Fade right>
          <Card
            style={{ width: "18rem", marginLeft: "auto", marginBottom: "5rem" }}
          >
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
              <Card.Title>Project Four</Card.Title>
              <Card.Text>
              Short project description
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Fade>
      </Container>

      <Container>
        <Zoom>
          <Card style={{ marginBottom: "5rem" }}>
            <Row>
              <Col>Icon</Col>
              <Col>Icon</Col>
              <Col>Icon</Col>
              <Col>Icon</Col>
            </Row>
            <Card.Body>
              <Card.Title>Experience</Card.Title>
              <Card.Text>
                Add some text about your years of experience and coding bootcamp......?  Maybe..... IDK
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
        </Zoom>
      </Container>

      <Container>
        <Zoom>
          <Card style={{ marginBottom: "5rem" }}>
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
                Talk about your journey in life and career so far.  Add cute picture 
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Zoom>
      </Container>
    </section>
  );
};

export default Content;
