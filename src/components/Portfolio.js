import React, { Component } from "react";
import { Button, Grid, Row, Col, Thumbnail } from "react-bootstrap";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <Grid className="projects">
        <h2 id="appHeading">Applications</h2>
        <Row id="projectRow">
          <Col xs={10} md={6} id="colProjectThree">
            <Thumbnail
              id="thirdProject"
              src={require("../images/jwt-mern.png")}
              alt="Project 3"
            >
              <h3>
                MERN (MongoDB_Express_React_NodeJS) with JSON Web Tokens -
                Personal Boilerplate
              </h3>
              <p>
                This application uses the MERN stack technologies that is
                compatible with JWT’s, so I can start with this Boilerplate for
                my future MERN stack projects
              </p>
              <p>
                <strong>
                  <span>Technologies used: </span>
                </strong>
                <p>
                  MERN, HTML, CSS, Javascript, React Bootstrap, JSON Web Tokens
                </p>
                <Button
                  target="_blank"
                  bsStyle="default"
                  href="https://github.com/tarekel96/MERN-JWT-Boilerplate"
                >
                  More info
                </Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={10} md={6}>
            <Thumbnail
              id="firstProject"
              src={require("../images/ombdMovie.png")}
              alt="Project 1"
            >
              <h3>OMDb Movie Finder</h3>
              <p>
                Movie app that allows its users to search for any movie from the
                OMDb api and find some basic info about the movie.
              </p>
              <strong>
                <span>Technologies used: </span>
              </strong>
              <p>OMDb api, Firebase Realtime Database, HTML, CSS, JavaScript</p>
              <p>
                <Button
                  target="_blank"
                  bsStyle="default"
                  href="https://github.com/tarekel96/Actors-and-Movies"
                >
                  More info
                </Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={10} md={6}>
            <Thumbnail
              id="secondProject"
              src={require("../images/socialSportsMeetup.png")}
              alt="Project 2"
            >
              <h3>Social Sports MeetUp</h3>
              <p>
                Sports networking app that brings together its users to sports
                client-created events.
              </p>
              <strong>
                <span>Technologies used: </span>
              </strong>
              <p>
                NodeJS, Express, HTML, CSS, JavaScript, Materialize MySQL,
                Sequelize, Google Maps api
              </p>
              <p>
                <Button
                  target="_blank"
                  bsStyle="default"
                  href="https://github.com/tarekel96/BootcampAssign-GroupProject2"
                >
                  More info
                </Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={10} md={6} id="colProjectThree">
            <Thumbnail
              id="fourthProject"
              src={require("../images/toesntictacs.png")}
              alt="Project 4"
            >
              <h3>Tic Tacs and Toes</h3>
              <p>
                A spin off of the original Tic Tac Toe Game that is similar to
                the one found from React's official tutorial.
              </p>
              <p>
                <strong>
                  <span>Technologies used: </span>
                </strong>
                <p>React, React Bootstrap, NodeJS</p>
                <Button
                  target="_blank"
                  bsStyle="default"
                  href="https://sleepy-lake-88286.herokuapp.com/"
                >
                  Heroku link
                </Button>
                <Button
                  target="_blank"
                  bsStyle="default"
                  href="https://github.com/tarekel96/secondTicTacToeGame"
                >
                  More info
                </Button>
              </p>
            </Thumbnail>
          </Col>
          {/* </Row> */}
        </Row>
      </Grid>
    );
  }
}
