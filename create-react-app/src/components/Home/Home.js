import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import YouTube from "react-youtube";
import "./Home.scss";

const opts = {
  height: "200",
  width: "100%",
  playerVars: {
    autoplay: 1
  }
};

const _onReady = event => event.target.pauseVideo();

const Home = () => {
  return (
    <div className="text-center">
      <div className="d-flex flex-column justify-content-center align-items-center App-header bg-dark">
        <Card bg="success" text="white">
          <Card.Header>
            <span className="App-logo">
              <FontAwesomeIcon icon={faReact} />
            </span>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Edit <code>src/App.js</code> and save to reload.
            </Card.Text>
            <Card.Link href="#" className="text-white">
              Card Link
            </Card.Link>
            <Card.Link href="#" className="text-white">
              Another Link
            </Card.Link>
            <div className="my-3">
              <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} />
            </div>
          </Card.Body>
          <Card.Footer>
            <ButtonGroup aria-label="Basic example">
              <Button
                size="lg"
                variant="primary"
                href="https://reactjs.org"
                target="_blank"
              >
                Learn React
              </Button>
              <Button size="lg" variant="secondary" as={Link} to="/error">
                Error
              </Button>
            </ButtonGroup>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default Home;
