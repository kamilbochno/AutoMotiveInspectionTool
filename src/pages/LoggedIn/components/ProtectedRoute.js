import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuthContext } from '../../../app/context/AuthContext';

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const { isLoggedIn } = useAuthContext();
    console.log("this", isLoggedIn);
   
    return (
    <Route
        {...restOfProps}
        render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/Login" />
        }
    />
    );
}

export default ProtectedRoute;