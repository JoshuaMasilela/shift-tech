import valid from 'card-validator';

export default function validateInfo(values) {
    let errors = {};

    //credit card details validation 
    let cCard = valid.number(values.number);

    cCard.expirationDate = valid.expirationDate(values.exp);
    cCard.cvv = valid.cvv(values.cvc);
    cCard.cardholderName = valid.cardholderName(values.name);

    // default expected error values
    // handles how error is displayed
    errors.show = true;
    errors.variant = 'warning';
    errors.message = 'An unknown error occured, Try again later!';
    
    //error state
    errors.cname = false;
    errors.cnumber = false;
    errors.cexp = false;
    errors.ccvv = false;

    //validation check using if statments

  //Card CVV expiration
  if (values.cvc === null || !values.cvc.trim()) {
    errors.message = "Credit card CVC is not complete";
    errors.ccvc = true;
  } else if (cCard.cvv.isValid) {
    errors.ccvc = false;
  } else {
    errors.ccvc = true;
    errors.message = "Credit card CVC is invalid";
  }

  //Card Number Verification
  if (values.number === null || !values.number.trim()) {
    errors.message = "Credit card number is not complete";
    errors.cnumber = true;
} else if (cCard.isValid) {
    errors.cnumber = false;
  } else {
    errors.cnumber = true;
    errors.message = "Credit card number is invalid";
  }


  //Cardholder Name Verification
  if (values.name === null || !values.name.trim()) {
    errors.message = "Cardholder name is not complete";
    errors.cname = true
  } else if (cCard.cardholderName.isValid) {
    errors.cname = false;
  } else {
    errors.cname = true
    errors.message = "Cardholder name is invalid";
  }

   //Card Expiration Date Verification
   if (values.exp === null || !values.exp.trim()) {
    errors.message = "Credit card expiration date is not complete";
    errors.cexp = true;
  } else if (cCard.expirationDate.isValid) {
    errors.cexp = false;
  } else {
    errors.cexp = true;
    errors.message = "Credit card expiration date is invalid";
  }
    
    return errors
}
