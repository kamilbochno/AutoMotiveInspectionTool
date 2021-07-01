import React from 'react';
import Button from '@material-ui/core/Button';

import styles from './Loginform.css';

function Login() {
    return (
    <div className="Login">
        <span className="close-btn"><a href="/">x</a></span>
        <form className="login-form">
         <h3>Sign in</h3>
            <label>
                Username:
                <input type="text" name="username" placeholder="Enter username" />
               
            </label>
            <label>
                Password:
                <input type="password" name="password" placeholder="Enter password" />
            </label>
            <Button style={{ marginTop: "20px"}} href="/" variant="contained" color="primary">
               Log in
            </Button>
            <p>Do not have an account? Register <a href="/Register">Here</a></p>
        </form>
    </div>
    );
}

export default Login;