import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const CreateExercise = () => {
  const [data, setData] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: []
  });
  useEffect(() => {
    axios
      .get("http://localhost:5000/users/")
      .then(response => {
        if (response.data.length > 0) {
          setData({
            ...data,
            users: response.data.map(user => user.username),
            username: response.data[0].username
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
    setData({
      ...data,
      users: ["test user"],
      username: "test user"
    });
  }, []);
  const onChangeUsername = e => {
    setData({
      ...data,
      username: e.target.value
    });
  };
  const onChangeDescription = e => {
    setData({
      ...data,
      description: e.target.value
    });
  };
  const onChangeDuration = e => {
    setData({
      ...data,
      duration: e.target.value
    });
  };
  const onChangeDate = date => {
    setData({
      ...data,
      date: date
    });
  };
  const CustomDatepicker = ({ value, onClick }) => (
    <Form.Control
      type="text"
      placeholder="Select a Date"
      value={value}
      onClick={onClick}
    />
  );
  const handleSubmit = e => {
    e.preventDefault();
    const exercise = {
      username: data.username,
      description: data.description,
      duration: data.duration,
      date: data.date
    };
    console.log(exercise);
    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then(res => console.log(res.data));
    window.location = "/";
  };
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <div>
            <h3 className="my-3">Create New Exercise Log</h3>
            <form onSubmit={e => handleSubmit(e)}>
              <Form.Group controlId="username">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  as="select"
                  value={data.username}
                  onChange={e => onChangeUsername(e)}
                  required
                >
                  {data.users.map(user => (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  placeholder="Enter a description..."
                  type="text"
                  value={data.description}
                  onChange={e => onChangeDescription(e)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="duration">
                <Form.Label>Duration (in minutes):</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter a Duration..."
                  value={data.duration}
                  onChange={e => onChangeDuration(e)}
                />
              </Form.Group>
              <Form.Group controlId="date">
                <Form.Label>Date:</Form.Label>
                <div>
                  <DatePicker
                    placeholderText="Click to select a Date"
                    selected={data.date}
                    onChange={e => onChangeDate(e)}
                    customInput={<CustomDatepicker />}
                  />
                </div>
              </Form.Group>
              <Form.Group controlId="submit">
                <Button
                  variant="primary"
                  type="submit"
                  value="Create Exercise Log"
                >
                  Create Exercise Log
                </Button>
              </Form.Group>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateExercise;
