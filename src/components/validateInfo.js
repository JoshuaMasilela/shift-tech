import valid from 'card-validator';

export default function validateInfo(values) {
    let errors = {};

    //credit card details validation 
    let cCard = valid.number(values.number);

    cCard.expirationDate = valid.expirationDate(values.exp);
    cCard.cvc = valid.cvv(values.cvc);
    cCard.cardholderName = valid.cardholderName(values.name);

    console.log(cCard)
    // default expected error values
    // handles how error is displayed
    errors.show = true;
    errors.variant = 'warning';
    errors.message = "An unknown error occured. Try again later";
    //error state
    errors.cname = false;
    errors.cnumber = false;
    errors.cexp = false;
    errors.ccvc = false;

    //validation check using if statments

    //Cardholder Name Verification
    if (values.name === null || !values.name.trim()) {
        errors.message = "Cardholder name is not complete";
        errors.cname = true
    } else if (cCard.cardholderName.isValid) {
        errors.cname = false;
    } else {
        // errors.cname = true;
        errors.message = "Cardholder name is invalid";
    }

    //Card Number Verification
    if (values.number === null || !values.number.trim()) {
        errors.message = "Credit card number is not complete";
        errors.cnumber = true;
    } else if (cCard.isValid) {
        errors.cnumber = false;
    } else {
        // errors.cnumber = true;
        errors.message = "Credit card number is invalid";
    }

    //Card Expiration Date Verification
    if (values.exp === null || !values.exp.trim()) {
        errors.message = "Credit card expiration date is not complete";
        errors.cexp = true;
    } else if (cCard.expirationDate.isValid) {
        errors.cexp = false;
    } else {
        // errors.cexp = true;
        errors.message = "Credit card expiration date is invalid";
    }
  
    //Card cvc expiration
    if (values.cvc === null || !values.cvc.trim()) {
        errors.message = "Credit card cvc is not complete";
        errors.ccvc = true;
    } else if (cCard.cvc.isValid) {
        errors.ccvc = false;
    } else {
        errors.message = "Credit card cvc is invalid";
    }

    if (
        errors.cname !==true
        &&
        errors.cnumber !==true
        &&
        errors.cexp !==true
        &&
        errors.ccvc !==true
     
      ) {
        errors.variant = "success";
        errors.message = "Credit Card is valid";  
      }

    return errors
}
