import React, { useContext } from 'react';
import './modal.css';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import InfoContext  from './InfoContext';
import { InfoProvider } from './InfoContext';




const Infomodal = () => {
  const info = useContext(InfoContext);

  return (
    

<div>

<section className="info-modal-main">
  
    <div>
      {console.log(info)}
        <h1>Vehicle info:</h1>
        <h2>Brand: </h2>
        <h3>Model: {info}</h3>
        <p>Year of production: {info}</p>
        <p>Color: {info}</p>
        <p>Price: {info} $</p>
        <p>Car body style: {info}</p>
        <p>Car fuel type: {info}</p>
        <p>Car engine capacity: {info}</p>
        <p>Engine power: {info}</p>

    </div>
  
</section>
</div>
  )
  }
  


export default Infomodal;