import { useState } from "react";
import validateInfo from "./validateInfo";
import CryptoJS from 'crypto-js';
import {decryptKey} from './ObjData';

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
            //get encryption env key
            const SECRET_KEY = await decryptKey.key;
            // Get array from local storage, defaulting to empty array if it's not yet set
            let itemsArray = await sessionStorage.getItem('cardDetails') ? JSON.parse(sessionStorage.getItem('cardDetails')) : [];


            //encypt details
            const card_number = await CryptoJS.AES.encrypt(values.number.toString(), SECRET_KEY).toString();
            // create values as objects
            const cardInfo = {
                name: values.name,
                card_number: card_number,
                cvv: values.cvv,
                expiry_date: values.exp
            };

            //push data into array
            await itemsArray.push(cardInfo)

            //add new data to array
            await sessionStorage.setItem('cardDetails', JSON.stringify(itemsArray));
        } catch (error) {
            console.log(error);
        }
    }
    //handle submit actions and validation check
    const handleSubmit = async(e) => {
        //prevent default
        e.preventDefault();

        setErrors(validateInfo(values));

        if (errors.variant === 'success') {
          await  storeInfo();
     
        } 
    }

    return { handleChange, handleSubmit, values, errors };
}

export default useForm;