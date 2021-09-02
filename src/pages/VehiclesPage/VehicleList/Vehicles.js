import React from 'react';
import { useVehiclesContext } from '../../../app/context/VehicleContext';
import { Table, Button } from 'react-bootstrap';
import './Vehicles.css';
const Vehicles = () => {
    const { vehicles, list, onChange, search, submitForm } = useVehiclesContext()
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
                        <div className="styled-table">
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
                        {list.filter(({ name }) => name.toLowerCase().includes(search)).map((item, index) => {

                    return <Table responsive striped bordered hover horizontal>
                                <tbody>
                                    <tr>
                                        <td className="id">{item.id}</td>
                                        <td className="name">{item.name}</td>
                                        <td className="model">{item.model}</td>
                                        <td className="year">{item.year}</td>
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