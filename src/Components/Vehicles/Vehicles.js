import React, { Component } from 'react'
import VehicleForm from '../Vehiclesform/VehicleForm';
import { Router, Switch, Route } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
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
            
            
              
         <div className="vehicle-list"> 
         <span className="close-btn"><a href="/">x</a></span>
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
                                <th><Button onClick={() => this.handleEdit(index)}>Edit</Button></th>
                                
                                <th><Button onClick={() => this.handleDelete(index)}>Delete</Button></th>
                                
                                
                                </Table>
                            
                        })}
                    
                    </div>    
               
            
        )
    }
}

export default VehicleList;