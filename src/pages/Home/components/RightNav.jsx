import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const Ul = styled.ul`
list-style: none;
display: flex;
flex-flow: row nowrap;

  li {
    padding: 10px 10px;
  }

  @media (max-width: 991.5px) {
    
    background-color: white;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 58px;
    right: 0;
    width: 220px;
    padding-top: 10px;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
      margin-right: 13px;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <div className="col-lg-12  ">
      <div className="main-menu">
        <nav>
        <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/#about">About</a>
                    </li>
                    <li>
                        <a href="/#services">Services</a>
                    </li>
                    <li>
                        <a href="/#team">Team</a>
                    </li>
                    <li>
                        <a href="/#blog">Blog</a>
                    </li>
                    <li>
                        <a href="/#contact">Contact</a>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/Login" className="highlight1">
                            Sign in
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/Register" className="highlight1">
                            Sign up
                        </NavLink>
                    </li>
                    </ul>
                    
                    </nav>
                    
                    
      </div>
      </div>
      </Ul>
      
  )
}

export default RightNav
