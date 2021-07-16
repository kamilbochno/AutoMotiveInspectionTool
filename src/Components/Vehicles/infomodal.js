import './modal.css';
import { Button } from 'react-bootstrap';
import VehicleList from './Vehicles';
import EditVehicle from '../Vehiclesform/EditVehicle';


const Infomodal = ({ handleClose, showinfo, children }) => {
  const showHideClassName = showinfo ? "modal display-block" : "modal display-none";

  return (
    
    <div className={showHideClassName}>
      <section className="modal-main">
      {children} 

        <Button className="M-close" onClick={handleClose}>
          Close
        </Button>
        
        
      </section>
    </div>
    
  );
};

export default Infomodal;