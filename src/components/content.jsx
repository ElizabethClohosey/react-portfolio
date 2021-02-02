import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Zoom, Fade } from "react-reveal";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript, SiInkscape } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { FaNodeJs, FaReact, FaNpm } from "react-icons/fa";
import LocalBusiness from "../images/project-images/local-business.svg";
import UnderConstruction from "../images/project-images/under-construction.png";

const Content = () => {
  // const [showGreeting, setShowGreeting] = useState(false);
  const cardBackground = 'rgba(0,0,0,0.5)';


  return (
    <section className="content">
      <Container className="d-flex flex-column">
        {/* My Projects Section - Project 1 */}
        <Zoom>
          <Card style={{ maxWidth: "18rem", marginBottom: "5rem", background: cardBackground }}>
            <Card.Img
              variant="top"
              src={LocalBusiness}
              style={{
                height: "200px",
                width: "200px",
                margin: "1rem auto 0",
              }}
            />
            <Card.Body>
              <Card.Title>Project One</Card.Title>
              <Card.Text>Short project description</Card.Text>
              <a href="https://github.com/ElizabethClohosey">
                <AiFillGithub />
              </a>
              <a href="https://github.com/ElizabethClohosey">
                <button>Project One Link</button>
              </a>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Zoom>

        {/* My Projects Section - Project 2 */}
        <Zoom>
          <Card
            style={{
              maxWidth: "18rem",
              marginLeft: "auto",
              marginBottom: "5rem",
              background: cardBackground
            }}
          >
            <Card.Img
              variant="top"
              src={UnderConstruction}
              style={{
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
          <Card style={{ maxWidth: "18rem", marginBottom: "5rem", background: cardBackground }}>
            <Card.Img
              variant="top"
              src={UnderConstruction}
              style={{
                height: "200px",
                width: "200px",
                margin: "1rem auto 0",
              }}
            />
            <Card.Body>
              <Card.Title>Project Three</Card.Title>
              <Card.Text>Short project description</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Fade>

        {/* My Projects Section - Project 4 */}
        <Fade right>
          <Card
            style={{
              maxWidth: "18rem",
              marginLeft: "auto",
              marginBottom: "5rem",
              background: cardBackground
            }}
          >
            <Card.Img
              variant="top"
              src={UnderConstruction}
              style={{
                height: "200px",
                width: "200px",
                margin: "1rem auto 0",
              }}
            />
            <Card.Body>
              <Card.Title>Project Four</Card.Title>
              <Card.Text>Short project description</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Fade>
      </Container>

      <Container>
        <Zoom>
          <Card style={{ marginBottom: "5rem", background: cardBackground }}>
            <Card.Body style={{maxWidth: '40rem', margin: 'auto'}}>
              <Row style={{background: 'black'}}>
                <Col>
                  <AiFillHtml5 className="experience-icons"style={{ color: "red" }} />
                </Col>
                <Col>
                  <IoLogoCss3 className="experience-icons"style={{ color: "#264de4" }} />
                </Col>
                <Col>
                  <SiJavascript
                    className="experience-icons"style={{ color: "#f0db4f" }}
                  />
                </Col>
                <Col>
                  <FaNodeJs className="experience-icons"style={{ color: "#68a063" }} />
                </Col>
              </Row>
              <Card.Title className="mt-3">Experience</Card.Title>
              <Card.Text>
                Add some text about your years of experience and coding
                bootcamp......? Maybe..... IDK
              </Card.Text>
              <Row>
                <Col>
                  <FaReact className="experience-icons" style={{ color: "#61DBFB" }} />
                </Col>
                <Col>
                  <SiInkscape className="experience-icons" style={{color: 'white'}}/>
                </Col>
                <Col>
                  <BsBootstrap className="experience-icons" style={{ color: "#563d7c" }} />
                </Col>
                <Col>
                  <FaNpm className="experience-icons" style={{ color: "#CC3534" }} />
                </Col>
              </Row>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Zoom>
      </Container>

      <Container>
        <Zoom>
          <Card style={{ marginBottom: "5rem", backgroundColor: cardBackground }}>
            <Card.Img
              variant="top"
              src={UnderConstruction}
              style={{
                margin: "1rem auto 0",
                boxShadow: "0 0 2 gray",
                height: '150px',
                width: '150px'
              }}
            />
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                Talk about your journey in life and career so far. Add cute
                picture
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
