import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import styles from './VehicleForm.css';

class VehicleForm extends Component {

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex == -1)
            return {
                id: '',
                name: '',
                model: '',
                year: '',
                color: '',
                price: ''
            }
        else
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex != this.props.currentIndex || prevProps.list != this.props.list) {
            this.setState({ ...this.returnStateObject() })
            console.log(prevProps, this.props)
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAddOrEdit(this.state)
    }

    render() {
        return (
            <div className="main-form">
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <div className="inputs">
                <input name="id" placeholder="Enter id" onChange={this.handleInputChange} value={this.state.id} /><br />
                <input name="name" placeholder="Enter name of vehicle" onChange={this.handleInputChange} value={this.state.name} /><br />
                <input name="model" placeholder="Enter model of vehicle" onChange={this.handleInputChange} value={this.state.model} /><br />
                <input name="year" placeholder="Enter year of production" onChange={this.handleInputChange} value={this.state.year} /><br />
                <input name="color" placeholder="Enter color of vehicle" onChange={this.handleInputChange} value={this.state.color} /><br />
                <input name="price" placeholder="Enter price of vehicle" onChange={this.handleInputChange} value={this.state.price} /><br />
                
                </div>
                <button type="submit">Submit</button>
            </form>
            </div>
        )
    }
}

export default VehicleForm;
    