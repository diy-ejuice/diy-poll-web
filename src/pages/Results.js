import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Results extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Survey Results</h1>
            <h3 className="text-muted">Coming Soon &trade;</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}
