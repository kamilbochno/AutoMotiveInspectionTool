import React, { useState } from 'react';
import './Loginform.css';
import Loginform from './Loginform';

const ValidatedForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
        <Loginform submitForm={submitForm} />
        </>
    );
};

export default ValidatedForm;