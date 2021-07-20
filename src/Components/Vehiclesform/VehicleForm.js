import React, { Component } from 'react';
import { Form, Button} from 'react-bootstrap';
import { withRouter} from 'react-router-dom';
import brands from './vehicles.json';
import ImageUpload from './ImageUpload';
import styles from './VehicleForm.css';

class VehicleForm extends Component {
    
    state = {
        
        ...this.returnStateObject(),
        
        
    }
    
    
    

    returnStateObject() {
        if (this.props.currentIndex === -1)
            return {
                id: '',
                year: '',
                price: '',
                HP: ''
                
            }
        else
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex !== this.props.currentIndex || prevProps.list !== this.props.list) {
            this.setState({ ...this.returnStateObject(), })
            console.log(prevProps, this.props)
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            
            
        })
        
    }
    handleSelectChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            carMake: brands?.[e.target.selectedIndex -1],
            
        })
    }
    
    

    handleSubmit = (e) => {
        
        e.preventDefault()
        this.props.onAddOrEdit(this.state)     
        this.props.history.push('/vehicles');
 
    }
    
    
    
    render() {
        
        
        return (
            
            <div className="main-vehicle">
            <div className="main-form">
            <Form onSubmit={this.handleSubmit} autoComplete="off">
           
            <h5 id="title">Fill inputs and submit to add new vehicle</h5>
                
   
                
                <div className="vehicle-inputs1">
                
                
                  
                
               
                <Form.Group controlId="make">
                    <Form.Label>Brand: </Form.Label>
                    <Form.Control as="select"
                        className="input-control"
                        type="text"
                        name="name"
                        
                        value={this.state.name}
                        required
                        onChange={this.handleSelectChange}
                        >   
                            <option value="" selected disabled="true">--Select brand--</option>
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
                        onChange={this.handleInputChange}
                        
                        
                    >
                        <option value="" selected disabled="true">--Select model--</option>
                        {this?.state?.carMake && this?.state?.carMake?.models.map((brandModel, index) => {
                            return <option>{brandModel}</option>
                        })
                        }
                            
                        
                            
                            
                    </Form.Control>
                </Form.Group>
                
                
                <Form.Group controlId="year">
                    <Form.Label>Year: </Form.Label>
                    <Form.Control
                        required
                        className="input-control"
                        type="number"
                        min="1960"
                        max="2022"
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
                            <option value="" selected disabled="true">--Select color--</option>
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
                        max="10000000"
                        name="price"
                        value={this.state.price}
                        placeholder="Enter price of vehicle"
                        onChange={this.handleInputChange}
                    />
                    
                </Form.Group>   
                <div className="vehicle-inputs2">
                <Form.Group controlId="car_body">
                    <Form.Label>Car body style: </Form.Label>
                    <Form.Control as="select"
                        required
                        className="input-control"
                        type="text"
                        name="car_body"
                        value={this.state.car_body}
                        onChange={this.handleInputChange}>
                        
                        
                        <option value="" selected disabled="true">--Select body style--</option>
                        <option>Small car</option>
                        <option>City car</option>
                        <option>Compact</option>
                        <option>Sedan</option>
                        <option>Kombi</option>
                        <option>Minivan</option>
                        <option>SUV</option>
                        <option>Cabriolet</option>
                        <option>Coupe</option>
                    </Form.Control>
                        
                    
                </Form.Group>  
                <Form.Group controlId="car_fuel">
                    <Form.Label>Car fuel: </Form.Label>
                    <Form.Control as="select"
                        required
                        className="input-control"
                        type="text"
                        name="car_fuel"
                        value={this.state.car_fuel}
                        onChange={this.handleInputChange}>
                        
                        
                        <option value="" selected disabled="true">--Select fuel--</option>
                        <option>Petrol</option>
                        <option>Diesel</option>
                        <option>Petrol + LPG</option>
                        <option>Petrol + CNG</option>
                        <option>Electric</option>
                        <option>Ethanol</option>
                        <option>Hybrid</option>
                        <option>Hydrogen</option>
                        
                    </Form.Control>
                        
                    
                </Form.Group> 
                <Form.Group controlId="car_capacity">
                    <Form.Label>Car engine capacity: </Form.Label>
                    <Form.Control as="select"
                        required
                        className="input-control"
                        type="text"
                        name="car_capacity"
                        value={this.state.car_capacity}
                        onChange={this.handleInputChange}>
                        
                        
                        <option value="" selected disabled="true">--Select engine capacity--</option>
                        <option>750 cm3</option>
                        <option>1000 cm3</option>
                        <option>1200 cm3</option>
                        <option>1300 cm3</option>
                        <option>1400 cm3</option>
                        <option>1500 cm3</option>
                        <option>1600 cm3</option>
                        <option>1700 cm3</option>
                        <option>1800 cm3</option>
                        <option>1900 cm3</option>
                        <option>2000 cm3</option>
                        <option>2200 cm3</option>
                        <option>2500 cm3</option>
                        <option>3000 cm3</option>
                        <option>3200 cm3</option>
                        <option>3500 cm3</option>
                        <option>4000 cm3</option>
                        <option>4500 cm3</option>
                        <option>5000 cm3</option>
                        <option>5500 cm3</option>
                        <option>6000 cm3</option>
                        
                        
                    </Form.Control>
                </Form.Group> 
                <Form.Group controlId="HP">
                    <Form.Label>Engine Power: </Form.Label>
                    <Form.Control
                        className="input-control"
                        type="number"
                        min="20"
                        max="700"
                        required
                        name="HP"
                        value={this.state.HP}
                        placeholder="Enter eng power"
                        onChange={this.handleInputChange}
                    />
                </Form.Group>
                </div>
                 
                
                
                
                </div>
                           
                
            
                <Button color="primary" className="submit-btn" type="submit">
                     Submit
                </Button> 
                
                </Form>
                
                 </div> 
                 </div>
        );
    }
}

export default withRouter(VehicleForm);
    
