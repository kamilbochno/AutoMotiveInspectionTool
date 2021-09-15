import './DelModal.css';
import { Button } from 'react-bootstrap';
import { useVehiclesContext } from '../../../app/context/VehicleContext';

const Delmodal = ({show, children, handleDelete}) => {
	const { showDelete, setShowDelete } = useVehiclesContext();
	const showHideClassName = show ? "modal display-block" : "modal display-none";
	const handleClose = () => {
			setShowDelete(false)
	}
	return (
    <div className={showHideClassName}>
			<section className="modal-main">
			{children}
			<Button size="lg" className="M-btn" onClick={handleDelete}>
					Delete
			</Button>                            
			<Button size="lg" className="M-btn" onClick={() => handleClose()}>
					Close
			</Button>   
			</section>
    </div>
	);
};

export default Delmodal;