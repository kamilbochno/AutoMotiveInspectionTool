import React, { useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const VehicleContext = React.createContext([]);

export const VehicleProvider = ({ children }) => {
    let history = useHistory();
    const [currentIndex, setCurrentIndex] = useState(-1)
    
    const [search, setSearch] = useState("")
    
    const returnList = () => {
        if (localStorage.getItem('vehicles') == null)
            localStorage.setItem('vehicles', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('vehicles'))
    }
    const [list, setList] = useState([])
    const returnStateObject = () => {
        if (currentIndex === -1)
            return {
                id: '',
                year: '',
                price: '',
                HP: ''
            }
        else return list[list.currentIndex]
    }
    const [stateObject, setStateObject] = useState(returnStateObject())
    const handleEdit = (index) => {
        setCurrentIndex(index)
    }
    const handleDelete = (index) => {
        let list = returnList()
        list.splice(index, 1);
        localStorage.setItem('vehicles', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }
    const onAddOrEdit = (data) => {
        let list = returnList()
        if (currentIndex === -1)
            list.push({...data, id:(list[list.length-1]?.id ?? 0) + 1})

        else list[currentIndex] = data
            localStorage.setItem('vehicles', JSON.stringify(list))
            setList({ list })
            setCurrentIndex ({currentIndex: -1})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onAddOrEdit(stateObject)
        history.push('/user/dashboard')
    }
    const onChange = e => {
        setSearch(e.target.value)
    }
    const submitForm = e => {
        e.preventDefault()
        history.push('/user/vehicles/add');
    }
    
    
    
    const addVehicle = () => {

    }
    const editVehicle = () => {

    }
    const removeVehicle = () => {

    }

    const vehicles = () => {
        
    }
    return (
        <VehicleContext.Provider value={{ list, vehicles, addVehicle, editVehicle, removeVehicle, submitForm, handleSubmit }}>
            {children}
        </VehicleContext.Provider>
    )
}

export const useVehiclesContext = () => useContext(VehicleContext);