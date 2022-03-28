import React, { useEffect, useState } from 'react'
import useForm from '../useForm';
import { AddCardContainer, AddCardTitle, BtnWrap, CardContainer, CardWrapper, ErrorText, Form, FormContent, FormContentInput, FormInput, FormInputWrap, LoadingText, LoadingVerificationWrapper } from './Elements/AddCardElements';
import Cards from 'react-credit-cards'; //install using --legacy-peer-deps
import 'react-credit-cards/es/styles-compiled.css';
import { SubmitCardButton } from '../ButtonElements';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

//import animation from animations folder
import ErrorDialog from '../Dialogs/ErrorDialog';
import SuccessDialog from '../Dialogs/SuccessDialog'
  ;
export default function AddCardSection({
  title,
  primary,
  big,
  fontBig,
  dark
}) {

  const [updateState, setUpdateState] = useState(false);

  //custom hooks
  const { handleChange, handleSubmit, handleVerification, setExistsAlert, setSuccessAlert, setSubmitInfo,
    values, errors, cardExists, cardAdded, loadingVerification, submitInfo } = useForm();

  const loadingState = loadingVerification;
  //handle error dialog close 
  const handleClose = () => {
    setExistsAlert(false);
    return false; // stops function
  };

  useEffect(() =>{
    setUpdateState(currentState =>{
      var changeState
      currentState =changeState
      return currentState
    })
  },[])
  //close success dialog
  const handleCloseSuccess = () => {
    setSuccessAlert(false);
    return false; // stop function
  }

  //set card focus
  const [focus, setFocus] = useState('');


  return (
    <AddCardContainer>
      <AddCardTitle>{title}</AddCardTitle>
      <Cards
        cvc={values.cvc}
        expiry={values.exp}
        focused={focus}
        name={values.name}
        number={values.number} />

      <CardWrapper>
        <CardContainer>
          <Form onSubmit={updateState ? handleSubmit : handleVerification}>
            <FormInputWrap>
              <FormInput
                type='text'
                label='Card Holder Name'
                value={values.name}
                name='name'
                size='small'
                fullWidth
                placeholder='eg. Mr.J Smith'
                variant='outlined'
                onChange={handleChange}
                onFocus={e => setFocus(e.target.name)}
                error={errors.cname}
              />
            </FormInputWrap>

            <FormInputWrap>
              <FormInput
                type='tel'
                variant='outlined'
                label='Card Number'
                value={values.number}
                name='number'
                placeholder='46579387504984'
                fullWidth
                size='small'
                onChange={handleChange}
                onFocus={e => setFocus(e.target.name)}
                error={errors.cnumber}
              />
            </FormInputWrap>
            <FormContent>
              <FormInputWrap>
                <FormContentInput
                  type="text"
                  label='Exp.Date'
                  value={values.exp}
                  variant='outlined'
                  name='exp'
                  size='small'
                  placeholder='MM/YY'
                  error={errors.cexp}
                  onChange={handleChange}
                  onFocus={e => setFocus(e.target.name)}
                />
              </FormInputWrap>

              <FormInputWrap>
                <FormContentInput
                  type='number'
                  label='cvc'
                  placeholder='111'
                  value={values.cvc}
                  name='cvc'
                  size='small'
                  onChange={handleChange}
                  error={errors.ccvc}
                  onFocus={e => setFocus(e.target.name)}
                />
              </FormInputWrap>
            </FormContent>

            <BtnWrap>

              {
                loadingState ?
                  <LoadingVerificationWrapper>
                    <CircularProgress
                      size={14} />
                    <LoadingText>Verifying card details... Please wait!</LoadingText>
                  </LoadingVerificationWrapper>

                  :
               
                    <SubmitCardButton
                    onClick={() => {
                      if(errors.variant === 'success'){
                        setUpdateState(true)
                      }else{
                        setUpdateState(false)
                      }
                      return false;
                    }
                
                  }
                      type="submit"
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      fontBig={fontBig ? 1 : 0}
                      big={big ? 1 : 0}>
                      {
                         updateState?
                          "Submit Credit Card Details" :"Verify Credit Card Details"
               }
                    </SubmitCardButton>
        }
   
             



            </BtnWrap>
            <ErrorDialog
              open={cardExists}
              onClose={handleClose} />

            <SuccessDialog
              open={cardAdded}
              onClose={handleCloseSuccess} />
            {/* <Dialog open={cardExists} onClose={handleClose}>

            <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: ErrorLottie,
              renderSettings: {
                preserveAspectRatio: 'xMidYMid slice'
              }
            }}
            height={260}
            width={260} />
              <ErrorText>Card with this number already exits... Please try different card!</ErrorText>
            </Dialog> */}

            {
              !loadingVerification &&
              errors.message && <Alert severity={errors.variant}>{errors.message}</Alert>

            }

          </Form>
        </CardContainer>
      </CardWrapper>
    </AddCardContainer>
  )
}
