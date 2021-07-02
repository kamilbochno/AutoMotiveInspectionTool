import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { v4 as uuidv4 } from 'uuid';

import styles from './VehicleForm.css';

const VehicleForm = (props) => {
    const [vehicle, setVehicle] = useState({
        id: props.vehicle ? props.vehicle.id : '',
        name: props.vehicle ? props.vehicle.name : '',
        model: props.vehicle ? props.vehicle.model : '',
        year: props.vehicle ? props.vehicle.year : '',
        color: props.vehicle ? props.vehicle.color : '',
        price: props.vehicle ? props.vehicle.price : '',
        date: props.vehicle ? props.vehicle.date : '',

    });


   const [errorMsg, setErrorMsg] = useState('');
   const { id, name, model, year, color, price } = vehicle;

   const handleOnSubmit = (event) => {
       event.preventDefault();
       const values = [id, name, model, year, color, price];
       let errorMsg = '';

       const allFieldsFilled = values.every((field) => {
           const value = `${field}`.trim();
           return value !== '' && value !== '0';
       });
    

    if (allFieldsFilled) {
        const vehicle = {
            id:
            name,
            model,
            year,
            color,
            price,
            date: new Date()
        };
    props.handleOnSubmit(vehicle);    
    } else {
        errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
          case 'quantity':
            if (value === '' || parseInt(value) === +value) {
              setVehicle((prevState) => ({
                ...prevState,
                [name]: value
              }));
            }
            break;
          case 'price':
            if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
              setVehicle((prevState) => ({
                ...prevState,
                [name]: value
              }));
            }
            break;
          default:
            setVehicle((prevState) => ({
              ...prevState,
              [name]: value
            }));
        }
      };

      return (
        <div className="main-form">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Form onSubmit={handleOnSubmit}>
                <span className="close-btn"><a href="/">x</a></span>
                <h4 className="title">Fill inputs and submit to add new vehicle</h4>
                <div className="inputs">
                <Form.Group controlId="id">
                    <Form.Label>Id: </Form.Label>
                    <Form.Control
                        className="input-control"
                        type="number"
                        name="id"
                        value={id}
                        placeholder="Enter id"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="name">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Enter name of vehicle"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="model">
                    <Form.Label>Model: </Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="model"
                        value={model}
                        placeholder="Enter model of vehicle"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="year">
                    <Form.Label>Year: </Form.Label>
                    <Form.Control
                        className="input-control"
                        type="number"
                        name="year"
                        value={year}
                        placeholder="Enter year of production"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="color">
                    <Form.Label>Color: </Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="color"
                        value={color}
                        placeholder="Enter color of vehicle"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label>Price: </Form.Label>
                    <Form.Control
                        className="input-control"
                        type="number"
                        name="price"
                        value={price}
                        placeholder="Enter price of vehicle"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="contained" color="primary" type="submit" className="submit-btn">
                    Submit
                </Button>
                </div>
            </Form>
            
        </div>
      );
    };

export default VehicleForm;
    