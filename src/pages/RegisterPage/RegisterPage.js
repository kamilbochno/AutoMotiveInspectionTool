import React, { useState } from 'react';
import '../RegisterPage/components/RegisterForm.css';
import Registerform from '../RegisterPage/components/RegisterForm';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
        <Registerform submitForm={submitForm} />
        </>
    );
};

export default Form;