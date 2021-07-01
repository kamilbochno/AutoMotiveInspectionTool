import React from 'react';
import Button from '@material-ui/core/Button';

import styles from './Registerform.css';

function Register() {
    return (
    <div className="Register">
        <span className="close-btn"><a href="/">x</a></span>
        <form className="register-form" action="/">
         <h3>Sign up</h3>
            <label>
                Username:
                <input type="text" name="username" placeholder="Enter username" />
               
            </label>
            <label>
                Password:
                <input type="password" name="password" placeholder="Enter password" />
            </label>
            <label>
                Confirm Password:
                <input type="password" name="password" placeholder="Confirm password" />
            </label>
            <Button style={{ marginTop: "20px"}} href="/" variant="contained" color="primary">
               Register
            </Button>
            <p>Already have an account? Login <a href="/Login">Here</a></p>
        </form>
    </div>
    );
}

export default Register;