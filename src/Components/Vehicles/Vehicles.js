import React, { Component, useState } from 'react'
import EditVehicle from '../Vehiclesform/EditVehicle';
import Loginnavigation from '../Loginpage/Loginnavigation';
import { withRouter } from 'react-router-dom';
import { Table, Button, Modal } from 'react-bootstrap';
import Delmodal from './Modal';
import Searchbar from './search';
import './Vehicles.css';
import './modal.css';



    

class VehicleList extends Component {
    state = {
        currentIndex: -1,
        list: this.returnList(),
    }
    
    

    showModal = () => {
        this.setState({
            show: true
        });
    };

    hideModal = () => {
        this.setState({show: false});
    };
    

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
        this.hideModal()
        
        
        
        
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
     
    submitForm (e) {
        e.preventDefault()
        this.props.history.push('/Addvehicle');
    }
    
    render() { 
        
        
        
        
        

        if(this.state.currentIndex !== -1) {
            return (
                <div>
                <EditVehicle
                    currentIndex={this.state.currentIndex}
                    list={this.state.list}
                    onAddOrEdit={this.onAddOrEdit}
                />
                </div>
            )
        }
        
         
        
        return (
                    
            
          
            

            <div className="main-home">
            <Loginnavigation></Loginnavigation>

           
         <div className="vehicle-list"> 
            
             <h3>List of vehicles</h3>  
                         
                        {this.state.list.map((item, index) => {
                            return <Table responsive striped bordered hover horizontal key={index}>
                                <thead>
                                <tr>
                                <th className="table-items">Image</th>
                                <th className="table-items">id </th>
                                <th className="table-items">name </th>
                                <th className="table-items">model </th>
                                <th className="table-items">year </th>
                                <th className="table-items">color </th>
                                <th className="table-items">price </th>
                                <th className="table-items">car body </th>
                                <th className="table-items">car fuel </th>
                                <th className="table-items">car capacity </th>
                                <th className="table-items">car hp </th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{item.image}</td>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.model}</td>
                                        <td>{item.year}</td>
                                        <td>{item.color}</td>
                                        <td>{item.price}</td>
                                        <td>{item.car_body}</td>
                                        <td>{item.car_fuel}</td>
                                        <td>{item.car_capacity}</td>
                                        <td>{item.HP}</td>
                                        
                                    </tr>
                                </tbody>
                                
                                <th><Button className="vehicles-btn" onClick={() => this.handleEdit(index)}>Edit</Button></th>
                                <Delmodal show={this.state.show} handleClose={this.hideModal}>                  
                                    <h1 className="Head">Confirmation</h1>
                                    <p className="M-description">Are you sure to delete this vehicle?</p>
                                    <Button className="M-btn" onClick={() => this.handleDelete(index)}>Delete</Button>
                                </Delmodal>             
                                
                                <th><Button className="vehicles-btn" onClick={this.showModal}>Delete</Button></th>
                                </Table>

                                
                            
                        })}
                                <div>
                                <Button className="vehicles-btn" onClick={this.submitForm.bind(this)} >Add vehicle</Button>
                                </div>
                                
      

                    </div>    
                    </div>
            
        )
    }
}

export default withRouter(VehicleList);