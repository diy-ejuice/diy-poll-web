import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Welcome</h1>
            <p>
              Help us by <Link to="/survey">taking the current survey</Link>!
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
