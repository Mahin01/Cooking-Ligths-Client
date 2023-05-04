import React from 'react';
import "./Login.css"
import { Button, Card, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container>
        <Card className='my-5 w-50 m-auto'>
            <h2 className='card-header text-uppercase'>Login</h2>
        <Form className='login-form p-3'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <p className='my-3'>Don't Have an account? Register <Link to="/register">Here</Link></p>
        <Form.Group className='mb-3'>
          <Button>Login with Google</Button>
        </Form.Group>
        <Form.Group>
          <Button>Login with Github</Button>
        </Form.Group>
        
      </Form>
      </Card>
      </Container>
    );
};

export default Login;