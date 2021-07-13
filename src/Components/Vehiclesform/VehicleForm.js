import React, { Component } from 'react';
import { Form, Button, Accordion, Card } from 'react-bootstrap';
import { withRouter} from 'react-router-dom';
import brands from './vehicles.json';
import ImageUpload from './ImageUpload';
import styles from './VehicleForm.css';

class VehicleForm extends Component {
    
    state = {
        ...this.returnStateObject()
        
    }
    constructor() {
        super();
        this.state = {
            carMake: ''
        }
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
            [e.target.name]: e.target.value,
            carMake:e.target.selectedIndex
            
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
           
            <h5 id="title">Fill inputs and submit to add new vehicle</h5>
                <div className="img-upload">
                    <h6 className="upl">Upload image:</h6>
                    <ImageUpload></ImageUpload>
                </div>
                
                <div className="vehicle-inputs1">
                
                   
                
                <Form.Group controlId="id">
                    <Form.Label>Id: </Form.Label>
                    <Form.Control
                        className="input-control"
                        type="number"
                        min="0"
                        required
                        name="id"
                        value={this.state.id}
                        placeholder="Enter id"
                        onChange={this.handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="make">
                    <Form.Label>Brand: </Form.Label>
                    <Form.Control as="select"
                        className="input-control"
                        type="text"
                        name="name"
                        
                        value={this.state.name}
                        required
                        onChange={this.handleInputChange}
                        >   
                            <option selected disabled="true">--Select brand--</option>
                            {brands.map((carBrand, index) => {
                                return <option>{carBrand.name}</option>
                            })}
                            
                        </Form.Control>
                    
                </Form.Group>
                <Form.Group controlId="model">
                    <Form.Label>Model: </Form.Label>
                    <Form.Control as="select"
                        required
                        
                        className="input-control"
                        type="text"
                        name="model"
                        value={this.state.model}
                        placeholder="Enter model of vehicle"
                        onChange={this.handleInputChange}
                        
                    >
                        <option selected disabled="true">--Select model--</option>
                        {brands.map((carBrand, index) => {
                            if (carBrand.name === brands.id)
                            {
                            return brands.models.map((brandModels, index) => {
                                return <option>{brandModels}</option>
                            })
                        }
                        })}
                            
                        
                            
                            
                    </Form.Control>
                </Form.Group>
                
                
                <Form.Group controlId="year">
                    <Form.Label>Year: </Form.Label>
                    <Form.Control
                        required
                        className="input-control"
                        type="number"
                        min="1950"
                        name="year"
                        value={this.state.year}
                        placeholder="Year of production"
                        onChange={this.handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="color">
                    <Form.Label>Color: </Form.Label>
                    <Form.Control as="select"
                        required
                        className="input-control"
                        type="text"
                        name="color"
                        value={this.state.color}
                        onChange={this.handleInputChange}>
                            <option selected disabled="true">--Select color--</option>
                            <option>Red</option>
                            <option>White</option>
                            <option>Green</option>
                            <option>Gold</option>
                            <option>Yellow</option>
                            <option>Blue</option>
                            <option>Gray</option>
                            <option>Silver</option>
                            <option>Purple</option>
                            <option>Black</option>
                            <option>Brown</option>         
                            <option>Maroon</option>
                            <option>Beige</option>
                            <option>Other color</option>
                            
                        </Form.Control>

                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label>Price: </Form.Label>
                    <Form.Control
                        required
                        className="input-control"
                        type="number"
                        min="0"
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
    
