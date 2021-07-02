import React from 'react';
import { Form, Button } from 'react-bootstrap';

import styles from './Registerform.css';

function Register() {
    return (
    <div className="Register">
        <span className="close-btn"><a href="/">x</a></span>
        <Form className="register-form">
         <h3>Sign up</h3>
         <Form.Group controlId="username">
                <Form.Label>Username: </Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
                
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label>Password: </Form.Label>
                <Form.Control type="text" placeholder="Enter password" />
                
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label>Confirm password: </Form.Label>
                <Form.Control type="text" placeholder="Enter password" />
                
            </Form.Group>
            <Button color="primary" type="submit">
               Register
            </Button>
            <p>Already have an account? Login <a href="/Login">Here</a></p>
        </Form>
    </div>
    );
}

export default Register;