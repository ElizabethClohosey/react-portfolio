import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Zoom, Fade } from "react-reveal";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript, SiInkscape } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { FaNodeJs, FaReact, FaNpm } from "react-icons/fa";
import LocalBusiness from "../images/project-images/local-business.svg";
import UnderConstruction from "../images/project-images/under-construction.png";
import spiralGalaxy from "../images/animations/spiral-galaxy.svg";

const Content = () => {
  // const [showGreeting, setShowGreeting] = useState(false);
  const purple = "#8000ff";
  const pink = "#ff00ff";
  const blue = "#0000ff";
  const orange = "#ff9340";
  const headerFont = '"Oleo Script", cursive';
  // const secondaryFont = "??"

  const cardBackground = "rgba(0,0,0,0.4)";
  // const cardBackground = "transparent";
  const footerBackground = "rgba(0,0,0,0.5)";
  // const footerBackground = "transparent";
  // const cardText = ".5rem";

  const projectCardStyle = {
    textAlign: "center",
    maxWidth: "18rem",
    marginBottom: "7rem",
    background: cardBackground,
    boxShadow: "0 0 10px black",
  };

  const projectCardTitleStyle = {
    color: "#e0bbf8",
    textShadow: "0 0 20px #cc06fe",
    fontFamily: headerFont,
    fontSize: "1.75rem",
  };

  const projectCardFooterStyle = {
    background: footerBackground,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <section className="content">
      <Container className="d-flex flex-column" style={{ color: "white" }}>
        {/* My Projects Section - Project 1 */}
        <Zoom>
          <Card style={projectCardStyle} className="project-card">
            <Card.Img
              variant="top"
              src={LocalBusiness}
              alt="local business with image of animated dog"
              style={{
                height: "175px",
                width: "175px",
                margin: "1rem auto 0",
                boxShadow: `0 0 5px ${purple}`,
              }}
            />
            <Card.Body>
              <Card.Title style={projectCardTitleStyle}>
                K9 Clubhouse
              </Card.Title>
              <Card.Text>Luxury Dog Hotel</Card.Text>
            </Card.Body>
            <Card.Footer style={projectCardFooterStyle}>
              <div
                className="icon-box"
                style={{ border: `1px solid ${purple}` }}
              >
                <a href="https://github.com/ElizabethClohosey">
                  <AiFillGithub className="project-icon purple" />
                </a>
              </div>
              <a href="https://github.com/ElizabethClohosey">
                <button
                  className="project-link"
                  style={{ border: `1px solid ${purple}` }}
                >
                  Project One Link
                </button>
              </a>
            </Card.Footer>
          </Card>
        </Zoom>

        {/* My Projects Section - Project 2 */}
        <Zoom>
          <Card style={projectCardStyle} className="ml-auto">
            <Card.Img
              variant="top"
              src={UnderConstruction}
              alt="item is currently being built"
              style={{
                height: "175px",
                width: "175px",
                margin: "1rem auto 0",
                boxShadow: `0 0 5px ${blue}`,
              }}
            />
            <Card.Body>
              <Card.Title style={projectCardTitleStyle}>Project Two</Card.Title>
              <Card.Text>
                Some quick example text to build on the project title and make
                up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Footer style={projectCardFooterStyle}>
              <div className="icon-box" style={{ border: `1px solid ${blue}` }}>
                <a href="https://github.com/ElizabethClohosey">
                  <AiFillGithub className="project-icon" />
                </a>
              </div>
              <a href="https://github.com/ElizabethClohosey">
                <button
                  className="project-link"
                  style={{ border: `1px solid ${blue}` }}
                >
                  Project One Link
                </button>
              </a>
            </Card.Footer>
          </Card>
        </Zoom>
        
        {/* <div className="spiral-galaxy"><img src={spiralGalaxy} alt="#"></img></div> */}

        {/* My Projects Section - Project 3 */}
        <Fade left>
          <Card style={projectCardStyle}>
            <Card.Img
              variant="top"
              src={UnderConstruction}
              style={{
                height: "150px",
                width: "150px",
                margin: "1rem auto 0",
                boxShadow: `0 0 5px ${pink}`,
              }}
            />
            <Card.Body>
              <Card.Title style={projectCardTitleStyle}>
                Project Three
              </Card.Title>
              <Card.Text>Short project description</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            <Card.Footer style={projectCardFooterStyle}>
              <div className="icon-box" style={{ border: `1px solid ${pink}` }}>
                <a href="https://github.com/ElizabethClohosey">
                  <AiFillGithub className="project-icon" />
                </a>
              </div>
              <a href="https://github.com/ElizabethClohosey">
                <button
                  className="project-link"
                  style={{ border: `1px solid ${pink}` }}
                >
                  Project Three Link
                </button>
              </a>
            </Card.Footer>
          </Card>
        </Fade>

        {/* My Projects Section - Project 4 */}
        <Fade right>
          <Card style={projectCardStyle} className="ml-auto">
            <Card.Img
              variant="top"
              src={UnderConstruction}
              style={{
                height: "150px",
                width: "150px",
                margin: "1rem auto 0",
                boxShadow: `0 0 5px ${orange}`,
              }}
            />
            <Card.Body>
              <Card.Title style={projectCardTitleStyle}>
                Project Four
              </Card.Title>
              <Card.Text>Short project description</Card.Text>
            </Card.Body>
            <Card.Footer style={projectCardFooterStyle}>
              <div
                className="icon-box"
                style={{ border: `1px solid ${orange}` }}
              >
                <a href="https://github.com/ElizabethClohosey">
                  <AiFillGithub className="project-icon" />
                </a>
              </div>
              <a href="https://github.com/ElizabethClohosey">
                <button
                  className="project-link"
                  style={{ border: `1px solid ${orange}` }}
                >
                  Project Four Link
                </button>
              </a>
            </Card.Footer>
          </Card>
        </Fade>
      </Container>

      {/* Experience Section *** Make own componenet *** */}
      <Container
        style={{
          marginBottom: "5rem",
          background: cardBackground,
          maxWidth: "768px",
        }}
      >
        <div>
          <Row
            style={{
              background: "rgba(0,0,0,.7)",
              padding: ".5rem 0",
              textAlign: "center",
            }}
          >
            <Col>
              <Zoom>
                <AiFillHtml5
                  className="experience-icons"
                  
                />
              </Zoom>
            </Col>
            <Col>
              <Zoom>
                <IoLogoCss3
                  className="experience-icons"
                />
              </Zoom>
            </Col>
            <Col>
              <Zoom>
                <SiJavascript
                  className="experience-icons"
                />
              </Zoom>
            </Col>
            <Col>
              <Zoom>
                <FaNodeJs
                  className="experience-icons"
                />
              </Zoom>
            </Col>
          </Row>

          <h2 className="mt-3">
            E<span className="blink_me">x</span>perience
          </h2>
          <p>
            Add some text about your years of experience and coding
            bootcamp......? Maybe..... IDK
          </p>
          <Zoom>
            <Row
              style={{
                background: "rgba(0,0,0,.7",
                padding: ".5rem 0",
                textAlign: "center",
              }}
            >
              <Col>
                <FaReact
                  className="experience-icons"
                />
              </Col>
              <Col>
                <SiInkscape
                  className="experience-icons"
                />
              </Col>
              <Col>
                <BsBootstrap
                  className="experience-icons"
                />
              </Col>
              <Col>
                <FaNpm
                  className="experience-icons"
                />
              </Col>
            </Row>
          </Zoom>
        </div>
      </Container>

      <Container>
        <Zoom>
          <Card
            style={{ marginBottom: "5rem", backgroundColor: cardBackground }}
          >
            <Card.Img
              variant="top"
              src={UnderConstruction}
              style={{
                margin: "1rem auto 0",
                boxShadow: "0 0 2 gray",
                height: "150px",
                width: "150px",
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
