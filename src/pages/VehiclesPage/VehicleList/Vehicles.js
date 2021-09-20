import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import { useVehiclesContext } from '../../../app/context/VehicleContext';
import { Table, Button } from 'react-bootstrap';
import './Vehicles.css';
const Vehicles = () => {
    const { formData, list, onChange, search, submitForm, setCurrentIndex, currentIndex, setFormData, setItem } = useVehiclesContext()
    let history = useHistory();
    console.log(list)
    return (
		
			<div className="main-home">
				<div className="vehicle-list">
					<h1>Vehicle list</h1>
						<div className="search-box">
							<input 
								type="text" 
								placeholder="Search..." 
								onChange={onChange} 
								value={search}>
							</input>
						</div>
						<div className="Vehicles">
						<div className="styled_table">
							<Table>
								<thead>
									<tr>
										<th className="table-items">Id</th>
										<th className="table-items">Name</th>
										<th className="table-items">Model</th>
										<th className="table-items">Year</th>
										<th>Info</th>
									</tr>
								</thead>
							</Table>
						</div>
							
							{list.filter(({ name }) => name.toLowerCase().includes(search)).map((item, index) => {
									const handleEdit = () => {
											setCurrentIndex(index)
											setFormData({
												...formData,
												id: item.id,
												
											})
											history.push(`/vehicles/${item.id}`)
											console.log(item.id)
									}
									if (item.name === "null") 
									return (
										null
									)
									return <Table className="map_table" responsive striped bordered hover horizontal key={index}>
											<tbody>
												<tr>
													
													<td className="id">{item.id}</td>
													<td className="name">{item.name}</td>
													<td className="model">{item.model}</td>
													<td className="year">{item.year}</td>
													<td><Button className="more" onClick={() => handleEdit()}>More</Button></td>
												</tr>
											</tbody>
										</Table>
								})}
								</div>
								<div>
										<Button className="vehicles-btn" onClick={submitForm}>Add vehicle</Button>
								</div>
				</div>
		</div>     
  )
}

export default Vehicles;