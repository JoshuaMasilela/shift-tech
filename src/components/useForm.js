import { useEffect, useState } from "react";
import validateInfo from "./validateInfo";
import CryptoJS from 'crypto-js';
import { decryptKey } from './ObjData';

const useForm = () => {


    //get encryption env key
    const SECRET_KEY = decryptKey.key;

    //set required variable state
    const [values, setValues] = useState({
        name: "",
        number: '',
        exp: '',
        cvc: '',
    });

    const checkErrors = (e) => {

        return false;
    }

    //set errors state
    const [errors, setErrors] = useState({});
    const [cardExists, setExistsAlert] = useState(false);
    const [cardAdded, setSuccessAlert] = useState(false);

    //loading state for verification check
    const [loadingVerification, setVerifation] = useState(false);

    const [submitInfo, setSubmitInfo] = useState(false);

    useEffect(() => {
        var update;
        setSubmitInfo(currentState => {
            update = currentState
            return currentState
        });
        console.log(update)
    }, [setSubmitInfo])
    //handle card inputs value change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const verifyInfo = async (e) => {

        await setVerifation(true)
        await setVerifation(true)
        setTimeout(async () => {
            await setErrors(validateInfo(values));
            await setVerifation(false);
            errors.variant === 'success' ?
                setSubmitInfo(true) : setSubmitInfo(false)

            return false;
        }, 3000);
        return false;
    }

    //store card details
    const storeInfo = async () => {

        try {


            // Get array from local storage, defaulting to empty array if it's not yet set
            let itemsArray = await JSON.parse(sessionStorage.getItem('cardDetails')) ? JSON.parse(sessionStorage.getItem('cardDetails')) : [];
            // Checking if email already exists
            if (itemsArray.some(user => CryptoJS.AES.decrypt(user.card_number, decryptKey.key).toString(CryptoJS.enc.Utf8) === values.number)) {

                setExistsAlert(true);
                return false; // stops the function execution
            }

            setExistsAlert(false);
            setErrors({});
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


            //push encrypted data into array
            await itemsArray.push(cardInfo)

            //add new data to array
            await sessionStorage.setItem('cardDetails', JSON.stringify(itemsArray));
            setSuccessAlert(true)

            //refresh page
            window.location.reload();
            return false;



        } catch (error) {
            console.log(error);
        }
    }

    //handle  validation check
    const handleVerification = async (e) => {
        //prevent default
        await e.preventDefault();
        await verifyInfo();
        await verifyInfo();
        return false;
    };


    //handle submit actions and validation check
    const handleSubmit = async (e) => {
        //prevent default
        await e.preventDefault();
        await storeInfo();
        return false;
    };

    return { handleChange, handleSubmit, handleVerification, setExistsAlert, setSuccessAlert, setVerifation, setSubmitInfo, values, errors, cardExists, cardAdded, loadingVerification, submitInfo };
}

export default useForm;