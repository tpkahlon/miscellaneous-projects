import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

const CreateUser = () => {
  const [data, setData] = useState({ username: "" });
  const onChangeUsername = e => {
    setData({
      ...data,
      username: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      ...data,
      username: data.username
    };
    console.log(newUser);
    axios
      .post("http://localhost:5000/users/add", newUser)
      .then(res => console.log(res.data));
    setData({
      ...data,
      username: ""
    });
  };
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <div>
            <h3 className="my-3">Create New User</h3>
            <form onSubmit={e => handleSubmit(e)}>
              <Form.Group controlId="username">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  placeholder="Enter a username..."
                  type="text"
                  value={data.username}
                  onChange={e => onChangeUsername(e)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="submit">
                <Button variant="primary" type="submit" value="Create User">
                  Create User
                </Button>
              </Form.Group>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateUser;
