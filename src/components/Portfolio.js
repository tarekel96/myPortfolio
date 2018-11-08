import React, { Component } from "react";
import { Button, Grid, Row, Col, Thumbnail } from "react-bootstrap";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <Grid className="projects">
        <Row id="projectRow">
          {/* <Row id="innerRow"> */}
          <Col xs={6} md={4}>
            <Thumbnail
              id="firstProject"
              src="https://i.imgur.com/roy1bdQ.png"
              alt="Project 1"
            >
              <h3>Thumbnail label</h3>
              <p>
                Movie app that allows its users to search for any movie from the
                OMDb api and find some basic info about the movie.
              </p>
              <p>
                <Button
                  bsStyle="primary"
                  href="https://github.com/tarekel96/Actors-and-Movies"
                >
                  Link
                </Button>
                &nbsp;
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src="/thumbnaildiv.png" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>
                &nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src="/thumbnaildiv.png" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>
                &nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
          {/* </Row> */}
        </Row>
      </Grid>
    );
  }
}
