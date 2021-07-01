import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import styles from './Home.css';

function Home() {
    return (
        <div className="Home">
            <div className="Navigation">
                <Container maxwidth="sm">
                    <div className="Links">
                        <NavLink activeClassName="active" to="/">
                            <Button variant="contained">Home</Button>
                        </NavLink>
                        <NavLink activeClassName="active" to="/Login">
                            <Button variant="contained">Login</Button>
                        </NavLink>
                        <NavLink activeClassName="active" to="/Register">
                            <Button variant="contained">Register</Button>
                        </NavLink>
                        <NavLink activeClassName="active" to="/Vehicles">
                            <Button variant="contained">Vehicles</Button>
                        </NavLink>
                        <NavLink activeClassName="active" to="/Addvehicle">
                            <Button variant="contained">Add vehicle</Button>
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