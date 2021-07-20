import './modal.css';
import { Button } from 'react-bootstrap';



const Delmodal = ({ handleClose, show, children, handleDelete}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    
    <div className={showHideClassName}>
      <section className="modal-main">
      {children}
       <Button size="lg" className="M-btn" onClick={handleDelete}>Delete</Button>
                                    
      <div className="modalbtn">
      <Button size="lg" className="M-close" onClick={handleClose}>
          Close
        </Button>
        </div>
        
      </section>
    </div>
    
  );
};

export default Delmodal;