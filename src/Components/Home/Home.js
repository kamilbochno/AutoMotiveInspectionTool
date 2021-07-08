
import React from 'react';


import { useState, useEffect } from 'react'
import { Navigation } from './navigation'
import { Header } from './header';
import { Features } from './features';
import { About } from './about';
import { Services } from './services';
import { Gallery } from './gallery';
import { Testimonials } from './testimonials';
import { Contact } from './contact';
import JsonData from './Data/data.json';



import styles from './Home.css';

const Home = () => {
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
export default Home;   