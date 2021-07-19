import './modal.css';
import { Button } from 'react-bootstrap';
import VehicleList from './Vehicles';
import EditVehicle from '../Vehiclesform/EditVehicle';


const Infomodal = ({ handleClose, showinfo,info }) => {
  const showHideClassName = showinfo ? "modal display-block" : "modal display-none";

  return (
    
      


<div className={showHideClassName}>
<section className="info-modal-main">
  {info && (
    <div>
        <h1>Vehicle info</h1>
        <h2>Brand: {info.name}</h2>
        <h3>Model: {info.model}</h3>
        <p>Year of production: {info.year}</p>
        <p>Color: {info.color}</p>
        <p>Price: {info.price} $</p>
        <p>Car body style: {info.car_body}</p>
        <p>Car fuel type: {info.car_fuel}</p>
        <p>Car engine capacity: {info.car_capacity}</p>
        <p>Engine power: {info.HP}</p>

    </div>
  )}
  <Button size="lg" className="M-close" onClick={handleClose}>
    Close
  </Button>
</section>
</div>
  );
};

export default Infomodal;