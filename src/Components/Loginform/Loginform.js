import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import Navigation from './subnavigation.jsx';
import styles from './Loginform.css';
import Loginpage from '../Loginpage/Loginpage';
import validate from './loginvalidateInfo';
import useForm from './loginuseForm';




const Login = ( { submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );
    
    

    return (
        <Container>   
    <div className="Login-page">
    
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
            <p className="test">Note: For test login use username: test password: 123</p>
</Form>
    
    </div>
    
    </div>
    </Container>
    );
}

export default Login;