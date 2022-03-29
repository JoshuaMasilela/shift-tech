import React, { useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import useForm from '../useForm';
//import animation from animations folder
import ErrorLottie from '../../assets/animations/90569-error.json';
import Lottie from 'react-lottie';
import { ErrorText, ErrorTitle } from './Elements/ErrorElements';

export default function ErrorDialog({ open, onClose, message }) {


    useEffect(() =>{
        onClose(open)
    },[])
    //handle dialog cloase 
    const handleClose = () => {
        onClose(false);
        return false;
    };


    return (
        <Dialog open={open} onClose={handleClose}>
            <ErrorTitle>Error!</ErrorTitle>
            <Lottie
                options={{
                    loop: true,
                    autoplay: true,
                    animationData: ErrorLottie,
                    renderSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                    }
                }}
                height={200}
                width={250} />
            <ErrorText>
                
                 {message}
            </ErrorText>
        </Dialog>
    )
}
