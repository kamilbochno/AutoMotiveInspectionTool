import React from 'react';
import { NavItem } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { useVehiclesContext } from '../../../app/context/VehicleContext';
import Delmodal from './DelModal';
import './Vehicle.css';

const Vehicle = () => {
    const { list, useList, showDelete, setShowDelete } = useVehiclesContext();
    const { id } = useParams();
    let history = useHistory();
    console.log(showDelete)
    if (useList === null) {
        return (
            <p>Sorry, not found</p>
        )
    }
    return (
        <div className="Vehicle_main">
                <div className="vehicle">
                <h1>Vehicle info:</h1>
                <h2>Brand: {list[id - 1].name}</h2>
                <h3>Model: {list[id - 1].model}</h3>
                <p>Year of production: {list[id - 1].year}</p>
                <p>Color: {list[id - 1].color}</p>
                <p>Price: {list[id - 1].price} $</p>
                <p>Body style: {list[id - 1].car_body}</p>
                <p>Fuel type: {list[id - 1].car_fuel}</p>
                <p>Engine capacity: {list[id - 1].car_capacity} </p>
                <p>Engine power: {list[id - 1].HP} HP</p> 
                </div>
                <Delmodal show={showDelete}>
                    <div className="modalcontainer">
                        <h1 className="Head">Confirmation</h1>
                        <p className="M-description">Are you sure to delete this vehicle?</p>
                    </div>

                </Delmodal>
                <button onClick={setShowDelete(true)}>Delete</button>
                <button onClick={() => history.push(`/vehicles/${id}/edit`)}>Edit</button>
        </div>
    )
}

export default Vehicle;

