import { useState } from "react";

const useForm = () =>{

    const [ values, setValues ] =useState({
        name:'',
        number:'',
        exp:'',
        cvc:'',
        focus:''
    });

    const [ erros, setErrors ] = useState('');


    const handleChange = e =>{

    }

    const handleFocus = e =>{

    }

    const handleSubmit = e =>{

    }

   return { handleChange, handleFocus, handleSubmit, values, errors}
}

