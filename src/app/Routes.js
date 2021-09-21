import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/LoginPage/LoginPage';
import Register from '../pages/RegisterPage/RegisterPage';
import Vehicle from '../pages/VehiclesPage/Vehicle/Vehicle';
import ProtectedRoute from '../pages/LoggedIn/components/ProtectedRoute';
import "../assets/jss/material-dashboard-react";
const Routes = () => {
    return (
        <div className="Routes">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <ProtectedRoute exact path="/user" component={Home} />
                <Route exact path="/vehicles/:id" component={Vehicle} />
                
            </Switch>
        </div>
    )
}

export default Routes;