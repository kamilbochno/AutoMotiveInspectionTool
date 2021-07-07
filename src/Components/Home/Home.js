
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Slide1 from './slide1_1.jpg';
import Slide2 from './slide2_2.jpg';
import Slide3 from './slide3_3.jpg';

import { Carousel, Form } from 'react-bootstrap';


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
                    <Carousel className="Carousel">
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
                    <Form className="Contact">
                        <h1>Contact us</h1>
                        <p>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>
                        <Form.Group controlId="contactForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="contactForm.ControlTextarea1">
                            <Form.Label>Your message</Form.Label>
                            <Form.Control as="textarea" rows={9} />
                        </Form.Group>
                        <Button variant="contained" color="primary">Submit</Button>
                    </Form>

                       
                </Container>
           
                
            </div>
        </div>
    )
}

export default Home;