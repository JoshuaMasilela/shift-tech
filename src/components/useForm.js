import { useState } from "react";
import validateInfo from "./validateInfo";

const useForm = () => {

    //set required variable state
    const [values, setValues] = useState({
        name: "",
        number: '',
        exp: '',
        cvc: '',
    });

    //set errors state
    const [errors, setErrors] = useState({});

    //handle card inputs value change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    //handle submit actions and validation check
    const handleSubmit = e => {

        //prevent default
        e.preventDefault();

        //set Errors by checking validate info against values
        setErrors(validateInfo(values))
    }

    return { handleChange, handleSubmit, values, errors };
}

export default useForm;