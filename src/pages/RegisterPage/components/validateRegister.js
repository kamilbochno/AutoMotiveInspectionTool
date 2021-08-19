export default function validateRegister(values) {
    let errors = {};
    

    if (!values.username.trim()) {
        errors.username = 'Username required';
    } else if (values.username.length < 6 || values.username.length > 15) {
        errors.username = 'Username must be between 6 and 15 characters';
        
    }
    

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 8 || values.password.length > 25) {
        errors.password = 'Password must be between 8 and 25 characters';
    }

    if (!values.password2) {
        errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match';
    }
    return errors;
}