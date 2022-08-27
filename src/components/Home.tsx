import "./Home.scss";
import { Col, Row, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>Full Stack Apps</h1>
      <Container>
        <Row>
          <Col className="column">
            <h2>To-Do List</h2>
            <Button variant="primary" onClick={() => navigate("/todolist")}>
              Open
            </Button>
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
