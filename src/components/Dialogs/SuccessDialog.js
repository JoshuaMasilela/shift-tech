import React from 'react';
import Dialog from '@mui/material/Dialog';
import useForm from '../useForm';
//import animation from animations folder
import SuccessLottie from '../../assets/animations/97240-success.json';
import Lottie from 'react-lottie';
import { SuccessTitle, SuccessText } from './Elements/SuccessElements';

export default function SuccessDialog({open, onClose}) {
 //handle dialog cloase 
 const handleClose = () => {
  onClose(false);
  return false;
};


return (
  <Dialog open={open} onClose={handleClose}>
<SuccessTitle>Success!</SuccessTitle>
      <Lottie
          options={{
              loop: true,
              autoplay: true,
              animationData: SuccessLottie,
              renderSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
              }
          }}
          height={250}
          width={250} />
      <SuccessText>Card successfully added!!</SuccessText>
  </Dialog>
)
}
