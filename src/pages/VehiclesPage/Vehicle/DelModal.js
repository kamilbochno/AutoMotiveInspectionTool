import './DelModal.css';
import { Button } from 'react-bootstrap';
import { useVehiclesContext } from '../../../app/context/VehicleContext';




const Delmodal = ({show, children, handleDelete}) => {
const { showDelete, setShowDelete } = useVehiclesContext();
const showHideClassName = !show ? "modal display-block" : "modal display-none";

return (
    
    <div className={showHideClassName}>
        <section className="modal-main">
        {children}
        <Button size="lg" className="M-btn" onClick={handleDelete}>Delete</Button>
                                    
        <div className="modalbtn">
            <Button size="lg" className="M-close" >
                Close
            </Button>
        </div>   
        </section>
    </div>
    
);
};

export default Delmodal;