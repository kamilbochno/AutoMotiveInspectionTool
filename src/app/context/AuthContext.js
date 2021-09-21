import React, { useContext, useState } from 'react';
const AuthContext = React.createContext([])

export const AuthProvider = ({children}) => {
    const [isSwitched, setIsSwitched] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, isSwitched, setIsSwitched}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);



