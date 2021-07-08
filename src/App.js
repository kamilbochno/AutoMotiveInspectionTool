import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { useState, useEffect } from 'react'
import { Navigation } from './Components/navigation';
import { Header } from './Components/header';
import { Features } from './Components/features';
import { About } from './Components/about';
import { Services } from './Components/services';
import { Gallery } from './Components/gallery';
import { Testimonials } from './Components/testimonials';
import { Contact } from './Components/contact';

import JsonData from './Data/data.json';


import Home from './Components/Home/Home';
import Login from './Components/Loginform/Loginform';
import Register from './Components/Registerform/Registerform';
import Vehicles from './Components/Vehicles/Vehicles';
import Addvehicle from './Components/Vehiclesform/Addvehicle';

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    /*<div className="App">
    <Route exact path="/" component={Home} />
    <Route exact path="/Login" component={Login} />
    <Route exact path="/Register" component={Register} />
    <Route exact path="/Vehicles" component={Vehicles} />
    <Route exact path="/Addvehicle" component={Addvehicle} />
    </div> */

    <div className="App">
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <Testimonials data={landingPageData.Testimonials} />
      
      <Contact data={landingPageData.Contact} />
    </div>
  );
}

export default App;
