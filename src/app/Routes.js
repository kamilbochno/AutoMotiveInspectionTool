import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/LoginPage/LoginPage';
import Register from '../pages/RegisterPage/RegisterPage';
import AddVehicle from '../pages/VehiclesPage/AddVehicle/AddVehicle';
import Vehicle from '../pages/VehiclesPage/Vehicle/Vehicle';
import EditVehicle from '../pages/VehiclesPage/EditVehicle/EditVehicle';
import Dashboard from '../pages/LoggedIn/Dashboard';
import ProtectedRoute from '../pages/LoggedIn/components/ProtectedRoute';
const Routes = () => {
    return (
        <div className="Routes">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <ProtectedRoute exact path="/user" component={Home} />
                <ProtectedRoute exact path="/user/dashboard" component={Dashboard} />
                <ProtectedRoute exact path="/user/vehicles/add" component={AddVehicle}/>
                <Route exact path="/vehicles/:id" component={Vehicle} />
                <ProtectedRoute exact path="/vehicles/:id/edit" component={EditVehicle} />
            </Switch>
        </div>
    )
}

export default Routes;