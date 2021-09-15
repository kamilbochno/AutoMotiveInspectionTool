import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import brands from '../../data/Vehicles/vehicles.json';

const VehicleContext = React.createContext([]);

export const VehicleProvider = ({ children }) => {
    let history = useHistory();
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [index, setVehicleIndex] = useState()
    const [showDelete, setShowDelete] = useState(false)
    const [activeDel, setActiveDel] = useState()
    const [search, setSearch] = useState("")
    const [item, setItem] = useState()
    const returnList = () => {
        if (localStorage.getItem('vehicles') == null)
            localStorage.setItem('vehicles', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('vehicles'))
    }
    const [list, setList] = useState(returnList())
    const returnStateObject = () => {
        if (currentIndex === -1)
            return {
                id: '',
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
    const onAddOrEdit = (data) => {
        let list = returnList();
        if (currentIndex === -1)
            list.push({...data, id:(list[list.length-1]?.id ?? -1) + 1})
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
        setFormData("")
        history.push('/user/dashboard');
    }
    const useList = () => {
        if ( !list.name)
            return null;
    }
    const editVehicle = (e) => {
        e.preventDefault()
        onAddOrEdit(formData)
        setFormData("")
        history.push('/user/dashboard')
        
        
    }
    const handleDelete = (index) => {
        let list = returnList()
        list.splice(index, 1);
        localStorage.setItem('vehicles', JSON.stringify(list))
        setList (list)
        setCurrentIndex (-1)
        setShowDelete(false)
        history.push(`/user/dashboard`)
        }
    return (
        <VehicleContext.Provider value={{item, setItem, activeDel,index, setVehicleIndex,setActiveDel, handleDelete, showDelete, setShowDelete,editVehicle, useList, onChange, search, formData, setFormData, list, vehicles, setVehicles, submitForm, onAddOrEdit, handleInputChange, handleSelectChange, handleSubmit, setCurrentIndex, currentIndex }}>
            {children}
        </VehicleContext.Provider>
    )
}

export const useVehiclesContext = () => useContext(VehicleContext);