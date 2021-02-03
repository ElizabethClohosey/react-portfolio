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

const Content = () => {
  // const [showGreeting, setShowGreeting] = useState(false);
  const purple = "#8000ff";
  const pink = "#ff00ff";
  const blue = "#0000ff";
  const orange = "#ff9340";

  const cardBackground = "rgba(0,0,0,0.4)";
  const footerBackground = "rgba(0,0,0,0.5)";
  // const cardText = ".5rem";

  const projectCardStyle = {
    maxWidth: "18rem",
    marginBottom: "5rem",
    background: cardBackground,
    boxShadow: "0 0 10px black",
  };
 
  const projectCardTitleStyle = {
    color: '#e0bbf8',
    textShadow: '0 0 20px #cc06fe',
    fontFamily: '"Oleo Script", cursive',
    fontSize: '1.75rem'
  }
  // color: #e0bbf8;
  // font-size: 2rem;
  // text-shadow: 0px 0px 20px #cc06fe;
  // font-family: "Oleo Script", cursive;

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
              <Card.Title style={projectCardTitleStyle}>K9 Clubhouse</Card.Title>
              <Card.Text>
                Luxury Dog Hotel
              </Card.Text>
            </Card.Body>
            <Card.Footer style={projectCardFooterStyle}>
              <a href="https://github.com/ElizabethClohosey">
                <AiFillGithub className="project-icon"/>
              </a>
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
              <a href="https://github.com/ElizabethClohosey">
                <AiFillGithub className="project-icon" />
              </a>
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
              <Card.Title style={projectCardTitleStyle}>Project Three</Card.Title>
              <Card.Text>Short project description</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            <Card.Footer style={projectCardFooterStyle}>
              <a href="https://github.com/ElizabethClohosey">
                <AiFillGithub className="project-icon" />
              </a>
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
              <Card.Title style={projectCardTitleStyle}>Project Four</Card.Title>
              <Card.Text>Short project description</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            <Card.Footer style={projectCardFooterStyle}>
              <a href="https://github.com/ElizabethClohosey">
                <AiFillGithub className="project-icon" />
              </a>
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

      <Container>
        <Zoom>
          <Card style={{ marginBottom: "5rem", background: cardBackground }}>
            <Card.Body style={{ maxWidth: "40rem", margin: "auto" }}>
              <Row style={{ background: "black" }}>
                <Col>
                  <AiFillHtml5
                    className="experience-icons"
                    style={{ color: "red" }}
                  />
                </Col>
                <Col>
                  <IoLogoCss3
                    className="experience-icons"
                    style={{ color: "#264de4" }}
                  />
                </Col>
                <Col>
                  <SiJavascript
                    className="experience-icons"
                    style={{ color: "#f0db4f" }}
                  />
                </Col>
                <Col>
                  <FaNodeJs
                    className="experience-icons"
                    style={{ color: "#68a063" }}
                  />
                </Col>
              </Row>
              <Card.Title className="mt-3">Experience</Card.Title>
              <Card.Text>
                Add some text about your years of experience and coding
                bootcamp......? Maybe..... IDK
              </Card.Text>
              <Row>
                <Col>
                  <FaReact
                    className="experience-icons"
                    style={{ color: "#61DBFB" }}
                  />
                </Col>
                <Col>
                  <SiInkscape
                    className="experience-icons"
                    style={{ color: "white" }}
                  />
                </Col>
                <Col>
                  <BsBootstrap
                    className="experience-icons"
                    style={{ color: "#563d7c" }}
                  />
                </Col>
                <Col>
                  <FaNpm
                    className="experience-icons"
                    style={{ color: "#CC3534" }}
                  />
                </Col>
              </Row>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Zoom>
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
