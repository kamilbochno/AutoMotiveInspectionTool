import React from 'react';
import './Dashboard.css';
import Vehicles from '../VehiclesPage/VehicleList/Vehicles';
import IdleTimerContainer from '../LoggedIn/components/IdleTimerContainer';

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <IdleTimerContainer/>
            <Vehicles/>
        </div>
    )
}

export default Dashboard;