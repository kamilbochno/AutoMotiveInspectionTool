import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Navigation from '../Loginform/subnavigation';
import styles from './Registerform.css';

function Register() {
    return (
    
        <Container className="h-100">
        <Navigation></Navigation>
        <div className="Register">
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
                <Form.Control type="text" placeholder="Confirm password" />
                
            </Form.Group>
            <Button size="lg" color="primary" type="submit">
               Register
            </Button>
            <p>Already have an account? Login <a href="/Login">Here</a></p>
        </Form>
        </div>
        </Container>
    
    
    
    );
}

export default Register;