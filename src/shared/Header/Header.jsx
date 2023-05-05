import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
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
                    <NavLink className={({ isActive }) => (isActive ? 'active-link text-decoration-none menu-item' : 'link text-decoration-none menu-item')} to="/">Home</NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink  className={({ isActive }) => (isActive ? 'active-link text-decoration-none menu-item' : 'link text-decoration-none menu-item')} to="/blog">Blog</NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink  className={({ isActive }) => (isActive ? 'active-link text-decoration-none menu-item' : 'link text-decoration-none menu-item')} to="/contact">Contact</NavLink>
                  </Nav.Link>
                </Nav>
                <Nav>
                {user ? 
                <div>
                <span><Image src={user.photoURL}></Image></span>
                  <Button onClick={handleLogout} className="login-btn" variant="primary">Logout</Button> 
                </div>
                :
                <Nav.Link>
                  <Link className='btn login-btn text-decoration-none menu-item' to="/login">Login</Link>
                </Nav.Link>
                }
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    );
};

export default Header;