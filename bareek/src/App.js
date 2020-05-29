import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  return (
    <div className="app d-flex align-items-center">
      <Container>
        <Row>
          <Col xs={12}>
            <img
              src="https://t3.ftcdn.net/jpg/02/03/91/52/240_F_203915248_TAnwS9nutBAKoPKrSPj9UOy0rd492dnL.jpg"
              alt="logo"
              className="logo"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
