import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, Button } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Row className="my-5">
        {!(window.localStorage._token) ?
          <Col>
            <Row className="my-3">
              <Col>
                <Link to="/login"><Button variant="info" size="lg">Login</Button></Link>
              </Col>
            </Row>
            <Row className="my-3">
              <Col>
                {officeImage}
              </Col>
            </Row>
          </Col>
          :
          <Col xs={12}>
            <Row className="my-3">
              <Col>
                <h3>Welcome Back!</h3>
              </Col>
            </Row>
            <Row className="my-3">
              <Col>
                {officeImage}
              </Col>
            </Row>
          </Col>
        }
      </Row>
    );
  }
}

const officeImage = (
  <Image src="/cartoon-office.jpg" fluid rounded />
)

export default Home;