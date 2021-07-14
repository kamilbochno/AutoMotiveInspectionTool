import './modal.css';
import { Button, Modal } from 'react-bootstrap';
import VehicleList from './Vehicles';


const Delmodal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

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

export default Delmodal;