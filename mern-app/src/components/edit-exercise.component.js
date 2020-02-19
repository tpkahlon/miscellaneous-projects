import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const EditExercise = ({ match }) => {
  const [data, setData] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: []
  });
  useEffect(() => {
    axios
      .all([
        axios.get("http://localhost:5000/exercises/" + match.params.id),
        axios.get("http://localhost:5000/users/")
      ])
      .then(
        axios.spread((getExercises, getUsers) => {
          if (getUsers.data.length > 0) {
            setData({
              ...data,
              users: getUsers.data.map(user => user.username),
              username: getExercises.data.username,
              description: getExercises.data.description,
              duration: getExercises.data.duration,
              date: new Date(getExercises.data.date)
            });
          } else {
            setData({
              ...data,
              username: getExercises.data.username,
              description: getExercises.data.description,
              duration: getExercises.data.duration,
              date: new Date(getExercises.data.date)
            });
          }
        })
      );
  }, []);
  console.log("here", data);
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
      .post(
        "http://localhost:5000/exercises/update/" + match.params.id,
        exercise
      )
      .then(res => console.log(res.data));
    window.location = "/";
  };
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <div>
            <h3 className="my-3">Edit Exercise Log</h3>
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
                <Form.Label>Duration (in):</Form.Label>
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
                  value="Edit Exercise Log"
                >
                  Edit Exercise Log
                </Button>
              </Form.Group>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EditExercise;
