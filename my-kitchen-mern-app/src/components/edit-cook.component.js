import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

const EditCook = ({ match }) => {
  const [data, setData] = useState({
    name: "",
    dish: "",
    price: 0
  });
  useEffect(() => {
    axios
      .get("http://localhost:5000/cooks/" + match.params.id)
      .then(response => {
        console.log(response);
        setData({
          ...data,
          name: response.data.name,
          dish: response.data.dish,
          price: response.data.price
        });
      });
  }, []);
  console.log("here", data);
  const onChangeName = e => {
    setData({
      ...data,
      name: e.target.value
    });
  };
  const onChangeDish = e => {
    setData({
      ...data,
      dish: e.target.value
    });
  };
  const onChangePrice = e => {
    setData({
      ...data,
      price: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const cook = {
      name: data.name,
      dish: data.dish,
      price: data.price
    };
    console.log(cook);
    axios
      .post("http://localhost:5000/cooks/update/" + match.params.id, cook)
      .then(res => console.log(res.data));
    setData({
      ...data,
      name: "",
      dish: "",
      price: 0
    });
    window.location = "/";
  };
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <div>
            <h3 className="my-3">Edit Cook</h3>
            <form onSubmit={e => handleSubmit(e)}>
              <Form.Group controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  placeholder="Enter Cook Name..."
                  type="text"
                  value={data.name}
                  onChange={e => onChangeName(e)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="dish">
                <Form.Label>Dish:</Form.Label>
                <Form.Control
                  placeholder="Enter a Dish..."
                  type="text"
                  value={data.dish}
                  onChange={e => onChangeDish(e)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="price">
                <Form.Label>Price (in dollars):</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter a Price..."
                  value={data.price}
                  onChange={e => onChangePrice(e)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="submit">
                <Button variant="primary" type="submit" value="Edit Cook">
                  Edit Cook
                </Button>
              </Form.Group>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EditCook;
