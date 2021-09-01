import React, {useState, useRef } from 'react';
import IdleTimer from 'react-idle-timer';
import Modal from 'react-modal';
import { useAuthContext } from '../../../app/context/AuthContext';



function IdleTimerContainer() {
    
    const idleTimerRef = useRef(null)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const sessionTimeoutRef = useRef(null)
    const onIdle = () => {
        console.log('user is on idle')
        sessionTimeoutRef.current = setTimeout(logOut, 1000)
    }
    const { setIsLoggedIn } = useAuthContext();
    const logOut = () => {
        
        setIsLoggedIn(false)
        clearTimeout(sessionTimeoutRef.current)
        console.log('User has logged out')
    }
    return (
        <div>
            <IdleTimer
            ref={idleTimerRef}
            timeout={20 * 1000}
            onIdle={onIdle}>

            </IdleTimer>
        </div>
    )
}

export default IdleTimerContainer;