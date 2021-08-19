import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/LoginPage/LoginPage';
import Register from '../pages/RegisterPage/RegisterPage';
import Vehicles from '../pages/VehiclesPage/VehicleList/Vehicles';
import AddVehicle from '../pages/VehiclesPage/AddVehicle/AddVehicle';
import Vehicle from '../pages/VehiclesPage/Vehicle/Vehicle';
import EditVehicle from '../pages/VehiclesPage/EditVehicle/EditVehicle';

const Routes = () => {
    return (
        <div className="Routes">
            <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/app/vehicles" component={Vehicles} />
                    <Route exact path="/app/vehicles/add" component={AddVehicle}/>
                    <Route exact path="/app/vehicles/:id" component={Vehicle} />
                    <Route exact path="/app/vehicles/:id/edit" component={EditVehicle} />
            </Switch>
        </div>
    )
}

export default Routes;