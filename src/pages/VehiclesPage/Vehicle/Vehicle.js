import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { useVehiclesContext } from '../../../app/context/VehicleContext';
import { useAuthContext } from '../../../app/context/AuthContext';
import Delmodal from './DelModal';
import './Vehicle.css';

const Vehicle = () => {
	const { item, currentIndex, activeDel,setVehicleIndex, index, list, useList, showDelete, setShowDelete, handleEdit, setCurrentIndex,setActiveDel, handleDelete } = useVehiclesContext();
	const { id } = useParams();
	const { isLoggedIn } = useAuthContext();
	let history = useHistory();
	console.log(showDelete)
	if (list === null) {
		return (
				<p>Sorry, not found</p>
		)
	}
	const showDeleteModal = (index) => {
		setShowDelete(true)
		setActiveDel(index)
		console.log(currentIndex)
	}
	if (isLoggedIn === true)
	return (	
		<div className="Vehicle_main">
			<div className="vehicle">
				<div className="items">     
					<h5>Brand: </h5> 
					<h4>{list[id].name}</h4>
					<h5>Model: </h5>
					<h4>{list[id].model}</h4>
					<h6>Year of production: </h6>
					<h5>{list[id].year}</h5>
					<h6>Color: </h6>
					<h5>{list[id].color}</h5>
					<h6>Price: </h6>
					<h5>{list[id].price} $</h5>
					<h6>Body style: </h6>
					<h5>{list[id].car_body}</h5>
					<h6>Fuel type: </h6>
					<h5>{list[id].car_fuel}</h5>
					<h6>Engine capacity: </h6>
					<h5>{list[id].car_capacity}</h5>
					<h6>Engine power: </h6>
					<h5>{list[id].HP} HP</h5> 
				</div>
				
			<Button className="del-btn" onClick={() => showDeleteModal(index)}>Delete</Button>
			<Button className="del-btn" onClick={() => history.push(`/${id}/edit`)}>Edit</Button>
			</div>
			<Delmodal show={showDelete} handleDelete={() => {
				handleDelete(currentIndex)
			}}>
				<div className="modalcontainer">
					<h3 className="Head">Confirmation</h3>
						<h4 className="M-description">Are you sure to delete this vehicle?</h4>
				</div>
			</Delmodal>		
		</div>
	)
return (
	<div className="Vehicle_main">
			<div className="vehicle">
				<div className="items">     
					<h5>Brand: </h5> 
					<h4>{list[id].name}</h4>
					<h5>Model: </h5>
					<h4>{list[id].model}</h4>
					<h6>Year of production: </h6>
					<h5>{list[id].year}</h5>
					<h6>Color: </h6>
					<h5>{list[id].color}</h5>
					<h6>Price: </h6>
					<h5>{list[id].price} $</h5>
					<h6>Body style: </h6>
					<h5>{list[id].car_body}</h5>
					<h6>Fuel type: </h6>
					<h5>{list[id].car_fuel}</h5>
					<h6>Engine capacity: </h6>
					<h5>{list[id].car_capacity}</h5>
					<h6>Engine power: </h6>
					<h5>{list[id].HP} HP</h5> 
				</div>	
		</div>
	</div>
)
}
export default Vehicle;


					