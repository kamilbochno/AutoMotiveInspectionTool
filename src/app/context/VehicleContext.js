import React, {useContext, useState} from 'react';

const VehicleContext = React.createContext([]);

export const VehicleProvider = ({children}) => {

    const [vehicles, setVehicles] = useState([{id: 1, brand: 'Alfa Romeo', model: 'Giulietta', year: 2000, color: 'red', price: '2000', car_body: 'Sedan', car_fuel: 'diesel', car_capacity: '2000cm3', engine_power: '120'}]);
    
    const addVehicle = () => {

    }
    const editVehicle = () => {

    }
    const removeVehicle = () => {

    }
    return (
        <VehicleContext.Provider value={{vehicles, addVehicle, editVehicle, removeVehicle}}>
            {children}
        </VehicleContext.Provider>
    )
}

export const useVehiclesContext = () => useContext(VehicleContext);