import { Container, Nav, Button, Form, Stack, Col, Row } from "react-bootstrap"

import "../style/navBar.css"

function NavBar() {
  return (
    <div className="nav-container">
      <Container>
        <Row className="justify-content-md-center">
          <Nav
            activeKey="/home"
            >
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/todo">Checklist</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/ranking">Ranking</Nav.Link>
            </Nav.Item>
            <Col></Col>
            <Col xs lg="-6">
            <Stack direction="horizontal" gap={3}>
              <Form.Control className="me-auto" placeholder="Add your item here..." />
              <Button variant="secondary">Pesquisar</Button>
            </Stack>
            </Col>
          </Nav>
      </Row>
      </Container>
    </div>
  );
}

export default NavBar;