import React from 'react';
import { useVehiclesContext } from '../../../app/context/VehicleContext';
import { Table, Button } from 'react-bootstrap';
import './Vehicles.css';
const Vehicles = () => {
    const { formData, list, onChange, search, submitForm } = useVehiclesContext()
    console.log(list)
    
    return (
        <div className="main-home">
                <div className="vehicle-list">
                    <h2>Vehicle list</h2>
                        <div className="search-box">
                            <input 
                            type="text" 
                            placeholder="Search..." 
                            onChange={onChange} 
                            value={search}>
                            </input>
                        </div>
                        <div className="styled_table">
                            <Table>
                                <thead>
                                    <tr>
                                        <th className="table-items">Id</th>
                                        <th className="table-items">Name</th>
                                        <th className="table-items">Model</th>
                                        <th className="table-items">Year</th>
                                        
                                    </tr>
                                </thead>
                            </Table>
                        </div>
                        {list.map((item, index) => {

                            return <Table className="map_table" responsive striped bordered hover horizontal key={index}>
                                <tbody>
                                    <tr>
                                        <td className="id">{item.id}</td>
                                        <td className="name">{item.name}</td>
                                        <td className="model">{item.model}</td>
                                        <td className="year">{item.year}</td>
                                        <td><button>More</button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        })}
                        <div>
                            <Button className="vehicles-btn" onClick={submitForm}>Add vehicle</Button>
                        </div>
                </div>
            </div>
        
    )
}

export default Vehicles;