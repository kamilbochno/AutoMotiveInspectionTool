
import React from 'react';
import { useState, useEffect } from 'react'


import { Navigation } from './Loginnavigation'
import { Header } from '../Home/header';
import { Features } from '../Home/features';
import { About } from '../Home/about';
import { Services } from '../Home/services';
import { Gallery } from '../Home/gallery';
import { Testimonials } from '../Home/testimonials';
import { Contact } from '../Home/contact';
import JsonData from '../Home/Data/data.json';



import styles from '../Home/Home.css';


const Loginpage = () => {
    const [landingPageData, setLandingPageData] = useState({})
    useEffect(() => {
      setLandingPageData(JsonData)
    }, [])
    
    
   return (
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
export default Loginpage;   