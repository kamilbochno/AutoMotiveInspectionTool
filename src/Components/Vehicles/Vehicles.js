import React, { Component, useState } from 'react'
import EditVehicle from '../Vehiclesform/EditVehicle';
import Loginnavigation from '../Loginpage/Loginnavigation';
import { withRouter } from 'react-router-dom';
import { Table, Button, Container } from 'react-bootstrap';
import Delmodal from './Modal';
import Infomodal from './infomodal';

import './Vehicles.css';
import './modal.css';
import { Children } from 'react';




    

class VehicleList extends Component {
    state = {
        
        currentIndex: -1,
        list: this.returnList(),  
        search: ""
    }
    
    
    

    showModal = () => {
        this.setState({
            show: true,
            

            
        });
    };
    showInfoModal = (index) => {  
        
        this.setState({
            showinfo: true,
            activeInfo: index,
            
            
            
             
        })
        
    };
            
       

    hideModal = () => {
        this.setState({
            show: false,
            showinfo: false
        });
    };
    
    hideInfoModal = () => {
        this.setState({
            activeInfo: null
        })
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

     
    onChange = e => {
        this.setState({
            search: e.target.value
        })
        
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
             
                          <div className="search-box"><input type="text" placeholder="Search..." onChange={this.onChange} value={this.state.search}>
                              

                              </input> 
                              </div>
                                   
                              
                        
                                
                        {this.state.list.map((item, index) => {  
                            
                                
                            
                                            
                            
                            
                            
                        
                            
        
                            return <Table responsive striped bordered hover horizontal key={index}>
                                <thead>
                                <tr>
                                
                                <th className="table-items">Id </th>
                                <th className="table-items">Name </th>
                                <th className="table-items">Model </th>
                                
                                </tr>
                                </thead>
                                <tbody>
                                
                                    <tr>
                                        
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.model}</td>
                                        
                                        
                                    </tr>
                                </tbody>
                                
                                <th><Button className="vehicles-btn" onClick={() => this.handleEdit(index)}>Edit</Button></th>
                                           
                                
                                <th><Button className="vehicles-btn" onClick={this.showModal}>Delete</Button></th>
                                
                                
                                
                                <th><Button className="vehicles-btn" onClick={() => this.showInfoModal(index)}>More</Button></th>
                                <Delmodal show={this.state.show} handleClose={this.hideModal}>                  
                                    <div className="modalcontainer">
                                    <h1 className="Head">Confirmation</h1>
                                     <p className="M-description">Are you sure to delete this vehicle?</p>
                                     
                                    <Button size="lg" className="M-btn" onClick={() => this.handleDelete(index)}>Delete</Button>
                                    
                                    </div>
                                </Delmodal> 
                                </Table>
                        
                                
                                   
                        })}
                                <div>
                                <Button className="vehicles-btn" onClick={this.submitForm.bind(this)} >Add vehicle</Button>
                                </div>
                                
                                

                    </div> 
                    
                    <Infomodal showinfo={this.state.showinfo} info={this.state.list[this.state.activeInfo]} handleClose={this.hideModal}>
                                    
                                    
                                    
                                    


                                </Infomodal>
                                
                                </div>
                                
                    
                    
        )
        
    }
}

export default withRouter(VehicleList);