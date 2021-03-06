import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Container } from 'react-bootstrap';
import './LoginForm.css';
import validate from './validateLogin';
import useForm from './useLoginForm';

const Login = ( { submitForm }) => {
const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
);
  return (
  	<Container>   
    	<div className="Login-page">
    		<div className="Login">
        	<h3 className="sign-in">Sign in</h3>
        		<Form onSubmit={handleSubmit} className="login-form">
							<Form.Group controlId="username">
									<Form.Label><p className="title">Username: </p></Form.Label>
									<Form.Control className="title2"
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
									<Form.Label><p className="title">Password:</p> </Form.Label>
									<Form.Control className="title2"
											size="lg"
											type="password" 
											name="password"
											placeholder="Enter password"
											value={values.password}
											onChange={handleChange}
									/>
									{errors.password && <p className="validate">{errors.password}</p>}
							</Form.Group>
            		<button className="btn" type="submit">
            			Submit
      					</button>
								<p>Do not have an account? Register <a href="/Register">Here</a></p>
								<p className="test">Note: For test login use username: test password: 123</p>
        		</Form>
    	</div>
    </div>
    </Container>
  );
}

export default Login;