import './modal.css';
import { Button } from 'react-bootstrap';
import VehicleList from './Vehicles';
import EditVehicle from '../Vehiclesform/EditVehicle';


const Infomodal = ({ handleClose, showinfo,info }) => {
  const showHideClassName = showinfo ? "modal display-block" : "modal display-none";

  return (
    
      


<div className={showHideClassName}>
<section className="modal-main">
  {info && (
    <div>
<h1>{info.name}</h1>
<h3>{info.model}</h3>
<p>{info.year}</p>
<p>{info.color}</p>
<p>{info.price}</p>
<p>{info.car_body}</p>
</div>
  )}
  <Button className="M-close" onClick={handleClose}>
    Close
  </Button>
</section>
</div>
  );
};

export default Infomodal;