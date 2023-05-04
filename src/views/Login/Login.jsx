import React, { useContext } from 'react';
import "./Login.css"
import { Button, Card, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Login = () => {
  const {user, signUser, signInWithGoogle, signInWithGithub} = useContext(AuthContext);

  const HandleSignIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signUser(email, password)
    .then(result => {
      const loggedUser = result.user;
      form.reset();
    })
    .catch(error => console.error(error))
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
      const loggedUser = result.user;
    })
    .catch(error => console.error(error))
  }

  const handleGithubSignIn = () => {
    signInWithGithub()
    .then(result => {
      const loggedUser = result.user;
    })
    .catch(error => console.error(error))
  }
    return (
        <Container>
        <Card className='my-5 w-50 m-auto'>
            <h2 className='card-header text-uppercase'>Login</h2>
        <Form onSubmit={HandleSignIn} className='login-form p-3'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <p className='my-3'>Don't Have an account? Register <Link to="/register">Here</Link></p>
        <Form.Group className='mb-3'>
          <Button onClick={handleGoogleSignIn}>Login with Google</Button>
        </Form.Group>
        <Form.Group>
          <Button onClick={handleGithubSignIn}>Login with Github</Button>
        </Form.Group>
        
      </Form>
      </Card>
      </Container>
    );
};

export default Login;