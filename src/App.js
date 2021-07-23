import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';




import Home from './Components/Home/Home';

import Vehicles from './Components/Vehicles/Vehicles';
import Addvehicle from './Components/Vehiclesform/Addvehicle';
import Register from './Components/Registerform/Form';
import Login from './Components/Loginform/validatedForm';
import Loginpage from './Components/Loginpage/Loginpage';
import Infomodal from './Components/Vehicles/infomodal';



function App() {
  

  return (
    
    <div className="App">
    
    
    <Route exact path="/" component={Home} />
    <Route exact path="/Loginpage" component={Loginpage} />
    
    
    <Route exact path="/Login" component={Login} />
    <Route exact path="/Register" component={Register} />
    
    <Route exact path="/Vehicles" component={Vehicles} />
    <Route exact path="/Addvehicle" component={Addvehicle} />
    <Route exact path="/Infomodal" component={Infomodal} />
    </div> 
    
  );
}

export default App;
