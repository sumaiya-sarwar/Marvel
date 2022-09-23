import React from 'react';
import {Navbar, Container, Form, Button} from 'react-bootstrap';

const NavComponent = () => {
    return (
        <Navbar>
        <Container>
          <Navbar.Brand href='/'>Character List</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href='/'>SignUp/Login</a>
            </Navbar.Text>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default NavComponent;