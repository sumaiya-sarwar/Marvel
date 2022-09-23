import React from 'react';
import '../App.css'
import {Navbar, Container, Form, Button} from 'react-bootstrap';

const NavComponent = () => {
    return (
        <Navbar className="navbar">
        <Container>
          <Navbar.Brand className="nav-item" href='/'>Character List</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" style={{marginRight: '15px'}}>Search</Button>
            <Navbar.Text>
              <a className="nav-item" href='/'>SignUp/Login</a>
            </Navbar.Text>
          </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default NavComponent;