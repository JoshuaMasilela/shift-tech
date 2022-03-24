import valid from 'card-validator';

export default function validateInfo(values) {
    let errors = {};

    // default expected error values
    // handles how error is displayed
    errors.show = true;
    errors.variant = 'danger';
    errors.message = 'An unknown error occured, Try again later!';
    
    //error state
    errors.cname = false;
    errors.cnumber = false;
    errors.cexp = false;
    errors.ccvc = false;

    
    return errors
}
