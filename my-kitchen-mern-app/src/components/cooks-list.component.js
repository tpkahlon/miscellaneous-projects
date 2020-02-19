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

const Cook = ({ cook, deleteCook }) => {
  return (
    <tr>
      <td>{cook.name}</td>
      <td>{cook.dish}</td>
      <td>{`$${cook.price}`}</td>
      <td>
        <ButtonGroup>
          <Button
            size="sm"
            variant="primary"
            as={Link}
            to={"/edit/" + cook._id}
          >
            Edit
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => deleteCook(cook._id)}
          >
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};

const CooksList = () => {
  const [data, setData] = useState({ cooks: [] });
  useEffect(() => {
    axios
      .get("http://localhost:5000/cooks/")
      .then(response => {
        setData({ ...data, cooks: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const deleteCook = id => {
    axios
      .delete("http://localhost:5000/cooks/" + id)
      .then(res => console.log(res.data));
    setData({
      ...data,
      cooks: data.cooks.filter(el => el._id !== id)
    });
  };
  const cookList = () => {
    return data.cooks.map(currentCook => {
      return (
        <Cook
          cook={currentCook}
          deleteCook={e => deleteCook(e)}
          key={currentCook._id}
        />
      );
    });
  };
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <div>
            <h3 className="my-3">Cooks</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Dish</th>
                  <th>Price (in Dollars)</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{cookList()}</tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CooksList;
