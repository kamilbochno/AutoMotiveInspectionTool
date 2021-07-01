import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Components/Home/Home';
import Login from './Components/Loginform/Loginform';
import Register from './Components/Registerform/Registerform';
import AddVehicle from './Components/Vehiclesform/VehicleForm';

function App() {
  return (
    <div className="App">
    <Route exact path="/" component={Home} />
    <Route exact path="/Login" component={Login} />
    <Route exact path="/Register" component={Register} />
    <Route exact path="/Vehicles" component={Home} />
    <Route exact path="/Addvehicle" component={AddVehicle} />
    </div>
  );
}

export default App;
