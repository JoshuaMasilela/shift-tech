import { useState } from "react";
import validateInfo from "./validateInfo";

const useForm = () => {

    //set required variable state
    const [values, setValues] = useState({
        name: "",
        number: '',
        exp: '',
        cvv: '',
    });

    //set errors state
    const [errors, setErrors] = useState({});

    //handle card inputs value change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    //store card details
    const storeInfo = async () => {

        try {
            // Get array from local storage, defaulting to empty array if it's not yet set
            let itemsArray = sessionStorage.getItem('cardDetails') ? JSON.parse(sessionStorage.getItem('cardDetails')) : [];

            // create values as objects
            const cardInfo = {
                name: values.name,
                card_number: values.number
            };

            //push data into array
            itemsArray.push(cardInfo);

            //add new data to array
            await sessionStorage.setItem('cardDetails', JSON.stringify(itemsArray));
        } catch (error) {
            console.log(error);
        }
    }
    //handle submit actions and validation check
    const handleSubmit = e => {
        //prevent default
        e.preventDefault();

        setErrors(validateInfo(values));

        if (errors.variant === 'success') {
            storeInfo()
     
        } 
    }

    return { handleChange, handleSubmit, values, errors };
}

export default useForm;