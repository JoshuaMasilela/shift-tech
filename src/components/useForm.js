import { useState } from "react";
import validateInfo from "./validateInfo";
import CryptoJS from 'crypto-js';
import { decryptKey } from './ObjData';
import { number } from "card-validator";
import { cvv } from "card-validator/dist/cvv";

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
        await setErrors(validateInfo(values));
        try {
            if (errors.variant === 'success') {
                //get encryption env key
                const SECRET_KEY = await decryptKey.key;
                // Get array from local storage, defaulting to empty array if it's not yet set
                let itemsArray = await sessionStorage.getItem('cardDetails') ? JSON.parse(sessionStorage.getItem('cardDetails')) : [];


                // encypt card details
                // encrypt card number
                // encrypt card cvv
                // encrypt card expiry_date

                const card_number = await CryptoJS.AES.encrypt(values.number.toString(), SECRET_KEY).toString();
                const card_cvv = await CryptoJS.AES.encrypt(values.cvv.toString(), SECRET_KEY).toString();
                const card_exp_date = await CryptoJS.AES.encrypt(values.exp.toString(), SECRET_KEY).toString();

                // create values as objects
                const cardInfo = {
                    name: values.name,
                    card_number: card_number,
                    cvv: card_cvv,
                    expiry_date: card_exp_date,
                    timestamp: new Date(),
                };

                console.log(cardInfo)

                //push encrypted data into array
                await itemsArray.push(cardInfo)

                //add new data to array
                await sessionStorage.setItem('cardDetails', JSON.stringify(itemsArray));

                //refresh page after success
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    }
    //handle submit actions and validation check
    const handleSubmit = async (e) => {
        //prevent default
        await e.preventDefault();
        await storeInfo();


    }

    return { handleChange, handleSubmit, values, errors };
}

export default useForm;