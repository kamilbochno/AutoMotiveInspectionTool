import React from 'react';
import { Button, Table } from 'react-bootstrap';
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
                    <div className="items">           
                        <h5>Brand: </h5> 
                        <h4>{list[id - 1].name}</h4>
                        <h5>Model: </h5>
                        <h4>{list[id - 1].model}</h4>
                        <h6>Year of production: </h6>
                        <h5>{list[id - 1].year}</h5>
                        <h6>Color: </h6>
                        <h5>{list[id - 1].color}</h5>
                        <h6>Price: </h6>
                        <h5>{list[id - 1].price} $</h5>
                        <h6>Body style: </h6>
                        <h5>{list[id - 1].car_body}</h5>
                        <h6>Fuel type: </h6>
                        <h5>{list[id - 1].car_fuel}</h5>
                        <h6>Engine capacity: </h6>
                        <h5>{list[id - 1].car_capacity}</h5>
                        <h6>Engine power: </h6>
                        <h5>{list[id - 1].HP} HP</h5> 
                    </div>
                <Button className="del-btn" onClick={setShowDelete(true)}>Delete</Button>
                <Button className="del-btn" onClick={() => history.push(`/vehicles/${id}/edit`)}>Edit</Button>
                </div>
                <Delmodal show={showDelete}>
                    <div className="modalcontainer">
                        <h1 className="Head">Confirmation</h1>
                        <p className="M-description">Are you sure to delete this vehicle?</p>
                    </div>

                </Delmodal>
                
        </div>
    )
}

export default Vehicle;

