import React from 'react';
import { useEffect } from 'react';
import { useAuthContext } from './context/AuthContext';
import Navbar from '../pages/Home/components/Navbar.jsx';
import LoggedNavbar from '../pages/LoggedIn/components/Navbar.jsx';


const Layout = ({children}) => {
    const { isLoggedIn } = useAuthContext();
    useEffect(() => {
        localStorage.setItem('isLoggedIn', isLoggedIn)
    }, [isLoggedIn])
    return (
        <>
        {console.log(localStorage.getItem('isLoggedIn'))}
        {isLoggedIn ? <LoggedNavbar/> : <Navbar/>}
        {children}
        </>
    )

}

export default Layout;

