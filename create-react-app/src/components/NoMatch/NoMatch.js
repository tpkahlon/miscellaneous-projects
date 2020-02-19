import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadCry } from "@fortawesome/free-solid-svg-icons";
import "./NoMatch.scss";

const NoMatch = () => {
  return (
    <div className="text-center">
      <div className="d-flex flex-column justify-content-center align-items-center App-header bg-dark">
        <Card bg="success" text="white">
          <Card.Header>
            <span className="App-logo">
              <FontAwesomeIcon icon={faSadCry} />
            </span>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              This page does not exist.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              size="lg"
              variant="primary"
              as={Link}
              to="/"
            >
              Return to Home
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default NoMatch;