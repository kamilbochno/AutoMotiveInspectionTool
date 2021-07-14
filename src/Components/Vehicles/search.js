import React from "react";
import ReactDOM from "react-dom";
import brands from '../Vehiclesform/vehicles.json';
import {useState} from 'react';

function Searchbar() {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div className="search">
            <input type="text" placeholder="Search..." onChange={(event) => {setSearchTerm(event.target.value);
            }}
            />
            {brands.filter((val) => {
                if (searchTerm == "") {
                    return val
                } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            })}
        </div>
    )
        }

    export default Searchbar;