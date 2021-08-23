import React, { useState } from 'react';
import '../RegisterPage/components/RegisterForm.css';
import Registerform from '../RegisterPage/components/RegisterForm';
import Navbar from '../Home/components/Navbar.jsx';
const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
        <Navbar/>
        <Registerform submitForm={submitForm} />
        </>
    );
};

export default Form;