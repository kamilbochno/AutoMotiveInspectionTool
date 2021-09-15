import { useState, useEffect  } from "react";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "../../../app/context/AuthContext";
import { useLocation } from "react-router";

const useForm = (callback, validate) => {
const [values, setValues] = useState({
    username: '',
    password: ''
});
const [errors,setErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);
const handleChange = e => {
	const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
	});
};
const history = useHistory();
const { IsLoggedIn, setIsLoggedIn } = useAuthContext();
const location = useLocation();
const handleSubmit = e => {
		if (IsLoggedIn) {
				const { from } = location.state || { from: { pathname: "/"} };
				history.replace(from);
		}
		e.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
		if (values.username === "test" && values.password === "123") {
			history.push("/user")
			setIsLoggedIn(true)
			window.localStorage.setItem('isLoggedIn', true);   
		}
};
useEffect(
  () => {
			if (Object.keys(errors).length === 0 && isSubmitting) {
					callback();
			}
		},
		[errors]
);
return { handleChange, handleSubmit, values, errors };
};

export default useForm;