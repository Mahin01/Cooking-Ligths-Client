import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import "./Header.css";
import { AuthContext } from '../../../providers/AuthProviders';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.error(error);
      // An error happened.
    });
  }
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
                {user ? 
                <div>
                <span><Image src={user.photoURL}></Image></span>
                  <Button onClick={handleLogout} className="login-btn" variant="primary">Logout</Button> 
                </div>
                :
                <Button className="login-btn" variant="primary"><Nav.Link><Link className='text-decoration-none menu-item' to="/login">Login</Link></Nav.Link></Button>
                }
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    );
};

export default Header;