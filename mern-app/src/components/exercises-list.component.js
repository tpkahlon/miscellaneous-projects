import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  ButtonGroup
} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = ({ exercise, deleteExercise }) => {
  return (
    <tr>
      <td>{exercise.username}</td>
      <td>{exercise.description}</td>
      <td>{exercise.duration}</td>
      <td>{exercise.date.substring(0, 10)}</td>
      <td>
        <ButtonGroup>
          <Button
            size="sm"
            variant="primary"
            as={Link}
            to={"/edit/" + exercise._id}
          >
            Edit
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => deleteExercise(exercise._id)}
          >
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};

const ExercisesList = () => {
  const [data, setData] = useState({ exercises: [] });
  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises/")
      .then(response => {
        setData({ ...data, exercises: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const deleteExercise = id => {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then(res => console.log(res.data));
    setData({
      ...data,
      exercises: data.exercises.filter(el => el._id !== id)
    });
  };
  const exerciseList = () => {
    return data.exercises.map(currentExercise => {
      return (
        <Exercise
          exercise={currentExercise}
          deleteExercise={e => deleteExercise(e)}
          key={currentExercise._id}
        />
      );
    });
  };
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <div>
            <h3 className="my-3">Logged Exercises</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Description</th>
                  <th>Duration</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{exerciseList()}</tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ExercisesList;
