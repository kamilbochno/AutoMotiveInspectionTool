import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../app/context/AuthContext';
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
  const history = useHistory();
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();
  const logout = () => {
            setIsLoggedIn(false)
            history.push("/")
  }
  return (
    <Ul open={open}>
      <div className="col-lg-12  ">
      <div className="main-menu">
        <nav>
        <ul>
                    <li>
                        <a href="/user" className="highlight1">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/user#about">About</a>
                    </li>
                    <li>
                        <a href="/user#services">Services</a>
                    </li>
                    <li>
                        <a href="/user#team">Team</a>
                    </li>
                    <li>
                        <a href="/user#blog">Blog</a>
                    </li>
                    <li>
                        <a href="/user#contact">Contact</a>
                    </li>
                    <li>
                        <Link activeClassName="active" to="/user/dashboard" className="highlight1">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link onClick={logout} activeClassName="active" to="/" className="highlight1">
                            Logout
                        </Link>
                    </li>
                    </ul>
                    
                    </nav>
                    
                    
      </div>
      </div>
      </Ul>
      
  )
}

export default RightNav
