import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard.css';
import Vehicles from '../VehiclesPage/VehicleList/Vehicles';

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <Vehicles/>
        </div>
    )
}

export default Dashboard;