import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';




import Home from './Components/Home/Home';
import Login from './Components/Loginform/Loginform';
import Register from './Components/Registerform/Registerform';
import Vehicles from './Components/Vehicles/Vehicles';
import Addvehicle from './Components/Vehiclesform/Addvehicle';
import Form from './Components/Registerform/Form';
function App() {

  return (
    <div className="App">
    <Route exact path="/" component={Home} />
    <Route exact path="/Login" component={Login} />
    <Route exact path="/Register" component={Form} />
    <Route exact path="/Vehicles" component={Vehicles} />
    <Route exact path="/Addvehicle" component={Addvehicle} />
    </div> 
    /*
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
    */
  );
}

export default App;
