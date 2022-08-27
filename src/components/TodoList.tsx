import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./TodoList.scss";

export default function TodoList() {
  const navigate = useNavigate();

  const mockdata: string[] = [
    "Buy a new mattress",
    "Look for an apartment",
    "Build a new PC",
  ];

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
              <Form.Control type="text" placeholder="Enter task" />
            </Col>
            <Col xs={2}>
              <Button disabled variant="primary" type="submit">
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
