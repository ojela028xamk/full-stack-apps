import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./TodoList.scss";
import Axios from "axios";
import { useEffect, useState } from "react";
import { TodolistTS } from "../interfaces/TodolistTS";

export default function TodoList() {
  const navigate = useNavigate();
  const [listitem, setListitem] = useState<string>();
  const [listdata, setListdata] = useState<TodolistTS[]>();

  // fetch to-do list items from backend
  useEffect(() => {
    Axios.get("http://localhost:3100/browse").then((res) => {
      setListdata(res.data);
    });
  }, [listdata]);

  if (!listdata) {
    return <Spinner animation={"border"} className="m-4" />;
  }

  function addListitem() {
    Axios.post("http://localhost:3100/create", {
      listitem: listitem,
    }).then(() => {
      console.log("List item added.");
    });
  }

  function deleteListitem(listitemID: number) {
    Axios.delete(`http://localhost:3100/delete/${listitemID}`, {
      params: { id: listitemID },
    }).then((res) => {
      console.log(res);
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
        {listdata.map((listitem: TodolistTS) => (
          <Row className="mt-2">
            <Col xs={8}>
              <span>{listitem.listitem}</span>
            </Col>
            <Col xs={4}>
              <Button variant="warning">Edit</Button>{" "}
              <Button
                variant="danger"
                onClick={() => deleteListitem(listitem.id)}
              >
                Delete
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}
