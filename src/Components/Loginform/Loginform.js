import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Navigation from './subnavigation.jsx';
import styles from './Loginform.css';

function Login() {
    return (
    <div className="Login-page">
    <Navigation></Navigation>
    
    <div className="Login">
        <h3 className="sign-in">Sign in</h3>
       
        <Form className="login-form">
            <Form.Group controlId="username">
                <Form.Label>Username: </Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
                
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password: </Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            
            <Button size="lg" variant="primary" type="submit">
                Submit
            </Button>
            <p>Do not have an account? Register <a href="/Register">Here</a></p>
</Form>
    </div>
    </div>
    );
}

export default Login;