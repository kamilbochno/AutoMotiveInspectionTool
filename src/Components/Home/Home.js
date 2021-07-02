  
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import styles from './Home.css';

function Home() {
    return (
        <div className="Home">
            <div className="Navigation">
                <Container maxwidth="sm">
                    <div className="Links">
                        <NavLink activeClassName="active" to="/">
                           
                            <Button className="btn-link" variant="contained" color="primary">Home</Button>
                            
                        </NavLink>
                        <NavLink activeClassName="active" to="/Login">
                        
                            <Button className="btn-link" variant="contained" color="primary">Login</Button>
                          
                        </NavLink>
                        <NavLink activeClassName="active" to="/Register">
                            <Button className="btn-link" variant="contained" color="primary">Register</Button>
                        </NavLink>
                        <NavLink activeClassName="active" to="/Vehicles">
                            <Button className="btn-link" variant="contained" color="primary">Vehicles</Button>
                        </NavLink>
                        
                    </div>
                </Container>
            </div>
            <div className="Main">
                <Container className="Welcome">
                    <h1>Welcome to AutoMotiveInspectionTool</h1>
                    <p>For use the app please use the navigation menu</p>
                </Container>
            </div>
        </div>
    )
}

export default Home;