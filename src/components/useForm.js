import { useEffect, useState } from "react";
import validateInfo from "./validateInfo";
import CryptoJS from 'crypto-js';
import { decryptKey } from './ObjData';

const useForm = () => {

    // declare session storage
    const cardDetails = JSON.parse(sessionStorage.getItem('cardDetails'));
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
        });
    }



    //store card details
    const storeInfo = async () => {

        try {
            // Get array from local storage, defaulting to empty array if it's not yet set
            let itemsArray = await sessionStorage.getItem('cardDetails') ? JSON.parse(sessionStorage.getItem('cardDetails')) : [];
            // Get array from local storage, defaulting to empty array if it's not yet set
            let array_card_number = itemsArray.map((item) => { return item.card_number });
            console.log("encrypted card number: " + array_card_number)
            //decryt data ( card_number, exp_date, cvc)
            const cardNo = CryptoJS.AES.decrypt(array_card_number, decryptKey.key);
            console.log("card number: " + cardNo)
            await setErrors(validateInfo(values));
            if (errors.variant === 'success') {
                console.log("card number: " + cardNo)
                console.log("entered card number: " + values.number)
                if (cardNo !== values.number) {
                    //get encryption env key
                    const SECRET_KEY = await decryptKey.key;

                    // encypt card details
                    // encrypt card number
                    // encrypt card cvc
                    // encrypt card expiry_date
                    const card_number = await CryptoJS.AES.encrypt(values.number, SECRET_KEY).toString();
                    const card_cvc = await CryptoJS.AES.encrypt(values.cvc, SECRET_KEY).toString();
                    const card_exp_date = await CryptoJS.AES.encrypt(values.exp, SECRET_KEY).toString();

                    // create values as objects
                    const cardInfo = {
                        name: values.name,
                        card_number: card_number,
                        cvv: card_cvc,
                        expiry_date: card_exp_date,
                        timestamp: new Date(),
                        updatedAt: new Date(),
                    };

                    console.log(cardInfo)

                    //push encrypted data into array
                    await itemsArray.push(cardInfo)

                    //add new data to array
                    await sessionStorage.setItem('cardDetails', JSON.stringify(itemsArray));

                    //refresh page after success
                    // window.location.reload();
                } else {
                    alert("Card exists")
                }
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
    };





    return { handleChange, handleSubmit, values, errors };
}

export default useForm;