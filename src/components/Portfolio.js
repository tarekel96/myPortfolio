import React, { Component } from "react";
import { Button, Grid, Row, Col, Thumbnail } from "react-bootstrap";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <Grid className="projects">
        <h2 id="appHeading">Applications</h2>
        <Row id="projectRow">
          {/* <Row id="innerRow"> */}
          <Col xs={10} md={6}>
            <Thumbnail
              id="firstProject"
              src="https://i.imgur.com/roy1bdQ.png"
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
              src="https://i.imgur.com/gGO8HUT.png"
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
              id="thirdProject"
              src="https://i.imgur.com/gGO8HUT.png"
              alt="Project 3"
            >
              <h3>Manage Your Virtual Piggy</h3>
              <p>Simple finance app that is ideal for children.</p>
              <p>
                <strong>
                  <span>Technologies used: </span>
                </strong>
                <p>
                  MERN, HTML, CSS, Javascript, React Bootstrap, JSON Web Tokens
                </p>
                <Button
                  bsStyle="default"
                  href="https://github.com/tarekel96/projectThree"
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
