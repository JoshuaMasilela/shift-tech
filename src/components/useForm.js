import { useEffect, useState } from "react";
import validateInfo from "./validateInfo";
import CryptoJS from 'crypto-js';
import { decryptKey } from './ObjData';

import Geocode from "react-geocode";
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

    //dialog states
    const [bannedError, setBannedError] = useState(false);
    const [bannedSuccess, setBannedSuccess] = useState(false);

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

    const onCountryChange = (e) => {

        setCountry(e)
    }
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
                country_code: country,
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

    // banned

    // set Google Maps Geocoding API.
    Geocode.setApiKey("AIzaSyATw-3YDgm-0Di7FjLaN5lwu_ZqLB8tv74");

    // set response language. Defaults to english.
    Geocode.setLanguage("en");

    // set response region. Its optional.
    // A Geocoding request with region=es (Spain) will return the Spanish city.
    Geocode.setRegion("es");

    const [country, setCountry] = useState('');

    const handleCountryChange = (e) => {
        setCountry(e)
    }

    const submitCountry = async () => {

        // Get array from local storage, defaulting to empty array if it's not yet set
        let countryArray = await JSON.parse(sessionStorage.getItem('blockedCountries')) ? JSON.parse(sessionStorage.getItem('blockedCountries')) : [];
        // Checking if email already exists
        if (countryArray.some(item => item.country_name === country)) {
            setBannedError(true); // set error to true
            return false; // stops the function execution
        }
        setBannedError(false); //set error to false
        //Get Geodata
        Geocode.fromAddress(country).then(async (response) => {
           
            const { lat, lng } = response.results[0].geometry.location;
            const name = response.results[0].address_components[0].long_name;
            const code = response.results[0].address_components[0].short_name;

            // create values as objects
            const countryInfo = {
                country_name: name,
                country_code: code,
                country_lat: lat,
                country_lng: lng,
                timestamp: new Date(),
            };

            //push data into array
            await countryArray.push(countryInfo)
            setBannedSuccess(true)
            //add new data to array
            await sessionStorage.setItem('blockedCountries', JSON.stringify(countryArray));
            setTimeout(() => {
                setBannedSuccess(false);
                //refresh page
                window.location.reload();
            }, 3000)

        });
        return false;
    }

    const handleCountrySubmit = async (e) => {
        await e.preventDefault();
        submitCountry();
    }
    return {
        handleChange,
        handleCountryChange,
        handleSubmit,
        handleCountrySubmit,
        handleVerification,
        setExistsAlert,
        setSuccessAlert,
        setVerifation,
        setSubmitInfo,
        setBannedError,
        setBannedSuccess,
        onCountryChange,
        values,
        errors,
        cardExists,
        bannedError,
        bannedSuccess,
        cardAdded,
        loadingVerification,
        submitInfo,
        country,
    };
}


export default useForm;