import React from 'react';
import "./SignUp.css";
import { Button, Card, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <Container>
        <Card className='my-5 w-50 m-auto'>
            <h2 className='card-header text-uppercase'>User Registration</h2>
        <Form className='login-form p-3'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Photo URL</Form.Label>
          <Form.Control type="text" placeholder="Photo URL" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
        <p className='my-3'>Already Have an account? Login <Link to="/login">Here</Link></p>   
      </Form>
      </Card>
      </Container>
    );
};

export default SignUp;