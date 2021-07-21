import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Navigation from '../Loginform/subnavigation';
import validate from './validateInfo';
import useForm from './useForm';
import styles from './Registerform.css';

const Register = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    return (
    
        <Container className="h-100">
        <Navigation></Navigation>
        
        <div className="Register">
        <h3>Sign up</h3>
        <Form onSubmit={handleSubmit} className="register-form">
        
         <Form.Group controlId="username">
                <Form.Label><p>Username:</p> </Form.Label>
                <Form.Control 
                    size="lg"
                    type="text"
                    placeholder="Enter username" 
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                />
                {errors.username && <p className="validate">{errors.username}</p>}
                
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label><p>Password:</p> </Form.Label>
                <Form.Control
                    size="lg"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    value={values.password}
                    onChange={handleChange}
                   />
                {errors.password && <p className="validate">{errors.password}</p>}
                
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label><p>Confirm password: </p> </Form.Label>
                <Form.Control
                    size="lg"
                    type="password" 
                    placeholder="Confirm password"
                    name="password2"
                    value={values.password2}
                    onChange={handleChange}
                  />
                {errors.password2 && <p className="validate">{errors.password2}</p>}
                
            </Form.Group>
            <Button size="lg" color="primary" type="submit">
               Submit
            </Button>
            <p>Already have an account? Login <a href="/Login">Here</a></p>
        </Form>
        </div>
        </Container>
    
    
    
    );
}

export default Register;