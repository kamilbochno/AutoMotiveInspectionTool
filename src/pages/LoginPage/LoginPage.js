import React, { useState } from 'react';
import '../LoginPage/components/LoginForm.css';
import LoginForm from '../LoginPage/components/LoginForm';
import Navbar from '../Home/components/Navbar.jsx';
import { Nav } from 'reactstrap';
const ValidatedForm = () => {
    
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
        
        <LoginForm submitForm={submitForm} />
        </>
    );
};

export default ValidatedForm;