import React from 'react';
import VehicleForm from '../Vehiclesform/VehicleForm';

const AddVehicle = () => {
    const handleOnSubmit = (vehicle) => {
        console.log(vehicle);
    };

    return (
        <React.Fragment>
            <VehicleForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>

    );
};

export default AddVehicle;