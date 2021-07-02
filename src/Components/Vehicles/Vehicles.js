import React, { Component } from 'react'
import VehicleForm from '../Vehiclesform/VehicleForm';

import { Table } from 'react-bootstrap';
import styles from './Vehicles.css';
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
         <div className="vehicle-list"> 
             <h3>List of vehicles</h3>         
                        {this.state.list.map((item, index) => {
                            return <Table responsive striped bordered hover horizontal key={index}>
                                <thead>
                                <tr>
                                <th className="table-items">id </th>
                                <th className="table-items">name </th>
                                <th className="table-items">model </th>
                                <th className="table-items">year </th>
                                <th className="table-items">color </th>
                                <th className="table-items">price </th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.model}</td>
                                        <td>{item.year}</td>
                                        <td>{item.color}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                </tbody>
                                <th><button onClick={() => this.handleEdit(index)}>Edit</button></th>
                                <th><button onClick={() => this.handleDelete(index)}>Delete</button></th>
                                
                                
                                </Table>
                            
                        })}
                    
                </div>       
          </div>      
            
        )
    }
}

export default VehicleList;