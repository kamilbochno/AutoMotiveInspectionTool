import React, { Component } from 'react';
import { Form, Button, Accordion, Card } from 'react-bootstrap';
import { withRouter} from 'react-router-dom';

import ImageUpload from './ImageUpload';
import styles from './VehicleForm.css';

class VehicleForm extends Component {
    
    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex === -1)
            return {
                id: '',
                name: '',
                model: '',
                year: '',
                color: '',
                price: ''
            }
        else
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex !== this.props.currentIndex || prevProps.list !== this.props.list) {
            this.setState({ ...this.returnStateObject() })
            console.log(prevProps, this.props)
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAddOrEdit(this.state)
        this.props.history.push('/vehicles');
        
    }

    

    render() {
        return (
            <div className="main-form">
            <Form onSubmit={this.handleSubmit} autoComplete="off">
            <span className="close-btn"><a href="/">x</a></span>
            <h5 className="title">Fill inputs and submit to add new vehicle</h5>
                <div className="img-upload">
                    <h6>Upload image:</h6>
                    <ImageUpload></ImageUpload>
                </div>
                
                <div className="inputs">
                
                   
                
                <Form.Group controlId="id">
                    <Form.Label>Id: </Form.Label>
                    <Form.Control
                        className="input-control"
                        type="number"
                        name="id"
                        value={this.state.id}
                        placeholder="Enter id"
                        onChange={this.handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="name">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder="Enter name of vehicle"
                        onChange={this.handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="model">
                    <Form.Label>Model: </Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="model"
                        value={this.state.model}
                        placeholder="Enter model of vehicle"
                        onChange={this.handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="year">
                    <Form.Label>Year: </Form.Label>
                    <Form.Control
                        className="input-control"
                        type="number"
                        name="year"
                        value={this.state.year}
                        placeholder="Year of production"
                        onChange={this.handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="color">
                    <Form.Label>Color: </Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="color"
                        value={this.state.color}
                        placeholder="Enter color of vehicle"
                        onChange={this.handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label>Price: </Form.Label>
                    <Form.Control
                        className="input-control"
                        type="number"
                        name="price"
                        value={this.state.price}
                        placeholder="Enter price of vehicle"
                        onChange={this.handleInputChange}
                    />
                </Form.Group>   
                
                
                <Button color="primary" className="submit-btn" type="submit">
                     Submit
                </Button> 
                 
                
                           
                </div>
            
                
                
                </Form>
                </div>   
        );
    }
}

export default withRouter(VehicleForm);
    
