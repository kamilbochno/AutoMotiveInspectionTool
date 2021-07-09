import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Navigation from './subnavigation.jsx';
import styles from './Loginform.css';

import validate from './loginvalidateInfo';
import useForm from './loginuseForm';

const Login = ( { submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );
    return (
        
    <div className="Login-page">
    <Container className="h-100">
    <Navigation></Navigation>
    
    <div className="Login">
        
        <h3 className="sign-in">Sign in</h3>
       
        <Form onSubmit={handleSubmit} className="login-form">
            <Form.Group controlId="username">
                <Form.Label>Username: </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    value={values.username}
                    onChange={handleChange} 
                />
                {errors.username && <p className="validate">{errors.username}</p>}         
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password: </Form.Label>
                <Form.Control 
                    type="password" 
                    name="password"
                    placeholder="Enter password"
                    value={values.password}
                    onChange={handleChange}
                />
                {errors.password && <p className="validate">{errors.password}</p>}
            </Form.Group>

            
            <Button size="lg" variant="primary" type="submit">
                Submit
            </Button>
            <p>Do not have an account? Register <a href="/Register">Here</a></p>
</Form>
    
    </div>
    </Container>
    </div>
    
    );
}

export default Login;