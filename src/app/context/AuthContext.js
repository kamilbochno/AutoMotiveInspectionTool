import React, {useContext, useState} from 'react';

const AuthContext = React.createContext([])

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
        return (
            <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
                {children}
            </AuthContext.Provider>
        )

}

export const useAuthContext = () => useContext(AuthContext);



