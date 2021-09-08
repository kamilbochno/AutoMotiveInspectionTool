import React, { useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import brands from '../../data/Vehicles/vehicles.json';
const VehicleContext = React.createContext([]);

export const VehicleProvider = ({ children }) => {
    let history = useHistory();
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [showDelete, setShowDelete] = useState(false)
    const [activeDel, setActiveDel] = useState()
    const [search, setSearch] = useState("")
    
    
    const returnList = () => {
        if (localStorage.getItem('vehicles') == null)
            localStorage.setItem('vehicles', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('vehicles'))
    }
    const [list, setList] = useState(returnList())
    
    const returnStateObject = () => {
        if (currentIndex === -1)
            return {
                id:'' ,
                name: '', 
                make: '', 
                year: '', 
                color: '', 
                price: '', 
                body_style: '', 
                fuel: '', 
                capacity: '', 
                HP: ''
            }
            else return list[currentIndex]
    }
    const [formData, setFormData] = useState("")
    const [vehicles, setVehicles] = useState(returnStateObject)
    const handleEdit = (index) => {
        setCurrentIndex(index)
    }
    const onAddOrEdit = (data) => {
        let list = returnList();
        if (currentIndex === -1)
            list.push({...data, id:(list[list.length-1]?.id ?? 0) + 1})

        else list[currentIndex] = data
            localStorage.setItem('vehicles', JSON.stringify(list))
            setList( list )
            setCurrentIndex (-1)
    }
    
    const onChange = e => {
        setSearch(e.target.value)
    }
    const submitForm = e => {
        e.preventDefault()
        history.push('/user/vehicles/add');
    }
    
    
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSelectChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            carMake: brands?.[e.target.selectedIndex - 1]
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onAddOrEdit(formData)
        history.push('/user/dashboard');

    }
    const useList = () => {
        if ( !list.name)
            return null;
    }
    const editVehicle = () => {

    }
        const handleDelete = (index) => {
            let list = this.returnList()
            list.splice(index, 1);
            localStorage.setItem('vehicles', JSON.stringify(list))
            setList (list)
            setCurrentIndex (-1)
        }

    return (
        <VehicleContext.Provider value={{showDelete, setShowDelete, useList, onChange, search, formData, list, vehicles, setVehicles, editVehicle, submitForm, onAddOrEdit, handleInputChange, handleSelectChange, handleSubmit }}>
            {children}
        </VehicleContext.Provider>
    )
}

export const useVehiclesContext = () => useContext(VehicleContext);