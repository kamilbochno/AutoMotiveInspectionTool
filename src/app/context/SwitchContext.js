import React, { useContext, useState } from 'react';
const SwitchContext = React.createContext([])

export const AuthProvider = ({children}) => {
    const [isSwitched, setIsSwitched] = useState(false);
    return (
        <SwitchContext.Provider value={{isSwitched, setIsSwitched}}>
            {children}
        </SwitchContext.Provider>
    )
}

export const useSwitchContext = () => useContext(SwitchContext);