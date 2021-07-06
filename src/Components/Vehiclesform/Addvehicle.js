import React, { Component } from 'react'
import VehicleForm from '../Vehiclesform/VehicleForm';

import { Table, Button } from 'react-bootstrap';
import styles from './VehicleForm.css';

class VehicleList extends Component {
    state = {
        currentIndex: -1,
        list: this.returnList()
    }

    returnList() {
        if (localStorage.getItem('vehicles') == null)
            localStorage.setItem('vehicles', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('vehicles'))
    }

    handleEdit = (index) => {
        this.setState({
            currentIndex: index
        })
    }

    handleDelete = (index) => {
        let list = this.returnList()
        list.splice(index, 1);
        localStorage.setItem('vehicles', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }

    onAddOrEdit = (data) => {
        let list = this.returnList()
        if (this.state.currentIndex === -1)
            list.push(data)
        else
            list[this.state.currentIndex] = data
        localStorage.setItem('vehicles', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }
 render() {
    return (
        <div>
                <VehicleForm
                    currentIndex={this.state.currentIndex}
                    list={this.state.list}
                    onAddOrEdit={this.onAddOrEdit}
                />
        </div>
    );
}
}

export default VehicleList;