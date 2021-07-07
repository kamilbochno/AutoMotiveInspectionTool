
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Slide1 from './slide1_1.jpg';
import Slide2 from './slide2_2.jpg';
import Slide3 from './slide3_3.jpg';

import { Carousel } from 'react-bootstrap';


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
                        <NavLink activeClassName="active" to="/Addvehicle">
                            <Button className="btn-link" variant="contained" color="primary">Add vehicle</Button>
                        </NavLink>
                        
                    </div>
                </Container>
            </div>
            <div className="Main">
                <Container className="Welcome">
                    <h1>Welcome to AutoMotiveInspectionTool</h1>
                    <p>For use the app please use the navigation menu</p>
                    <p>This app can be used for adding vehicles to list and edit it's informations.</p>
                    <Carousel className="carousel">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Slide1}
                                alt="First slide"
                            />    
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Slide2}
                                alt="Second slide"
                            />    
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Slide3}
                                alt="Third slide"
                            />    
                        </Carousel.Item>
                    </Carousel>
                    

                       
                </Container>
            </div>
        </div>
    )
}

export default Home;