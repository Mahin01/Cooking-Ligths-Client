import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
              <Navbar.Brand className='site-title' to="/">Cooking Lights</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="m-auto menu">
                  <Nav.Link>
                    <Link className='text-decoration-none menu-item' to="/">Home</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className='text-decoration-none menu-item' to="/stat">Blog</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className='text-decoration-none menu-item' to="/applied-jobs">Contact</Link>
                  </Nav.Link>
                </Nav>
                <Nav>
                <Button className="login-btn" variant="primary"><Nav.Link><Link className='text-decoration-none menu-item' to="/login">Login</Link></Nav.Link></Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    );
};

export default Header;