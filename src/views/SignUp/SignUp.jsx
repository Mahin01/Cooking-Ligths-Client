import React, { useContext } from 'react';
import "./SignUp.css";
import { Button, Card, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const SignUp = () => {
  const {user, createUser} = useContext(AuthContext);

  const HandleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.pwd.value;
    const avatar = form.avatar.value;

    createUser(email, password)
    .then(result => {
      const loggedUser = result.user;
      form.reset();
    })
    .catch(error => console.error(error))
  }
    return (
        <Container>
        <Card className='my-5 w-50 m-auto'>
            <h2 className='card-header text-uppercase'>User Registration</h2>
            <form onSubmit={HandleSignUp} className='p-3'>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                <input type="text" className="form-control" name="name" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name='email' className="form-control" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name='pwd' />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Photo URL</label>
                <input type="text" className="form-control" name='avatar' aria-describedby="emailHelp" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
      </Card>
      </Container>
    );
};

export default SignUp;