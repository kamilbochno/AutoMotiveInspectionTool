import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Logo from '../../Home/assets/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    
      <div className="header-style-2">
    <div className="container">
    <div className="row"></div>
      <div className="col-lg-3 col-md-10 col-sm-10 col-8 col-t">
            <div className="logo">
                <a href="/user">
                    <img src={Logo} alt=""/>
                </a>
            </div>
      </div>
      <Burger />
      </div>
      </div>
      
  )
}

export default Navbar
