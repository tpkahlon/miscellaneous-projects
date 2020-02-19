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

const User = ({ user, deleteUser }) => {
  return (
    <tr>
      <td>{user.username}</td>
      <td>
        <ButtonGroup>
          <Button
            size="sm"
            variant="primary"
            as={Link}
            to={"/edit/" + user._id}
          >
            Edit
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => deleteUser(user._id)}
          >
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};

const UsersList = () => {
  const [data, setData] = useState({ users: [] });
  useEffect(() => {
    axios
      .get("http://localhost:5000/users/")
      .then(response => {
        setData({ ...data, users: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const deleteUser = id => {
    axios
      .delete("http://localhost:5000/users/" + id)
      .then(res => console.log(res.data));
    setData({
      ...data,
      users: data.users.filter(el => el._id !== id)
    });
  };
  const userList = () => {
    return data.users.map(currentUser => {
      return (
        <User
          user={currentUser}
          deleteUser={e => deleteUser(e)}
          key={currentUser._id}
        />
      );
    });
  };
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <div>
            <h3 className="my-3">Logged Users</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{userList()}</tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UsersList;
