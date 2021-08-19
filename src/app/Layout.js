import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from './context/AuthContext';

const Layout = ({children}) => {
    const {isLoggedIn} = useAuthContext();
    return (
        <>
        {children}
        </>
    )

}

export default Layout;

