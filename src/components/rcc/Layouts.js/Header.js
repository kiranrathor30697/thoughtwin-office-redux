import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Link className='text-white text-decoration-none p-3 fs-5' to="/">Home</Link>
            <Nav className="me-auto">
              <Link className='text-white text-decoration-none p-3 fs-5' to="/login">Login</Link>
              <Link className='text-white text-decoration-none p-3 fs-5' to="/register">Register</Link>
              <Link className='text-white text-decoration-none p-3 fs-5' to="/logout">Logout</Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    )
  }
}
