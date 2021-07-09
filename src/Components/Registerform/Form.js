import React, { useState } from 'react';
import './Registerform.css';
import Registerform from './Registerform';

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