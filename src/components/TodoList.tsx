import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./TodoList.scss";
import Axios from "axios";
import { useState } from "react";

export default function TodoList() {
  const navigate = useNavigate();
  const [listitem, setListitem] = useState<string>();

  const mockdata: string[] = [
    "Buy a new mattress",
    "Look for an apartment",
    "Build a new PC",
  ];

  function addListitem() {
    Axios.post("http://localhost:3100/create", {
      listitem: listitem,
    }).then(() => {
      console.log("List item added.");
    });
  }

  return (
    <div className="todolist">
      <Button variant="secondary" onClick={() => navigate("../")}>
        Go Back
      </Button>
      <h1 className="display-3">To-Do List</h1>
      <Form>
        <Container>
          <Row>
            <Col xs={10}>
              <Form.Control
                type="text"
                name="listitem"
                placeholder="Enter task"
                onChange={(event) => setListitem(event.target.value)}
              />
            </Col>
            <Col xs={2}>
              <Button variant="primary" type="submit" onClick={addListitem}>
                Add +
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
      <Container className="todolist-items">
        {mockdata.map((taskitem: string) => (
          <Row className="mt-2">
            <Col xs={8}>
              <span>{taskitem}</span>
            </Col>
            <Col xs={4}>
              <Button variant="warning">Edit</Button>{" "}
              <Button variant="danger">Delete</Button>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}
