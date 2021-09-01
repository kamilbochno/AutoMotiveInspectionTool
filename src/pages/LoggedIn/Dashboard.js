import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import './Dashboard.css';
import Vehicles from '../VehiclesPage/VehicleList/Vehicles';
import { useVehiclesContext } from '../../app/context/VehicleContext';
const Dashboard = () => {
    const { vehicles } = useVehiclesContext();
    return (
        <div className="Dashboard">
            <Navbar/>
            <div className="Dashboard-menu">
                <div className="container">
                <div className="col-lg-12  ">
        <div className="main-menu">
        <nav>
        <ul>
                    <li>
                        <NavLink activeClassName="active" to="/user/vehicles" className="highlight1">
                            Vehicles
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/user/vehicles/add" className="highlight1">
                            Add vehicle
                        </NavLink>
                    </li>
                    </ul>
                    
                    </nav>
                    </div>
                    </div>
            </div>
            </div>
            <div className="Dashboard-items">
                <div className="container">
                    <Vehicles/>
                    
                </div>
            </div>
        </div>
    )
}
export default Dashboard;