import "./App.scss";
import { Col, Row, Container, Button } from "react-bootstrap";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Full Stack Apps</h1>
      <Container>
        <Row>
          <Col className="column">
            <h2>To-Do List</h2>
            <Button variant="primary">Open</Button>
          </Col>
          <Col className="column">
            <h2>Project 2</h2>
            <Button variant="primary" disabled>
              Open
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
