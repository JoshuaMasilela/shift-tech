import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Column1,
  Column2,
  ContentWrap,
  EditContainer,
  EditHeading,
  EditRow,
  EditWrapper,
  Eye,
  Heading,
  Img,
  ImgWrap,
  SubHeader,
  Subheading,
  TextWrapper,
} from './EditElements';
import useForm from '../useForm';
import { AddCardContainer, AddCardTitle, BtnWrap, CardContainer, CardWrapper, Form, FormContent, FormContentInput, FormInput, FormInputWrap } from './EditElements';
import Cards from 'react-credit-cards'; //install using --legacy-peer-deps
import 'react-credit-cards/es/styles-compiled.css';
import { SubmitCardButton } from '../ButtonElements';
import { Alert } from '@mui/material';
import CryptoJS from 'crypto-js';
import { decryptKey } from '../ObjData';

export default function EditCardSection({
  imgStart,
  lightText,
  darkText,
  img,
  lightTextDesc,
  alt,
  title,
  primary,
  dark,
  fontBig,
  big,
  subHeader1,
  subHeader2,
  subHeader3,
}) {
  //document name
  document.title = "Edit";

  // useLocation to get state params
  const location = useLocation();

  //declare params as child state
  const {
    id,
    card_holder,
    card_number,
    timeStamp,
    card_exp,
    card_cvc,
    //masked variables
    ms_card,
    ms_cvv,
    ms_exp_date

  } = location.state;

  //navigation
  let navigate = useNavigate();

  //mask variable declaration
  const [maskCardNumber, setNumberMaskToggle] = useState(false);
  const [maskCardCvv, setCvvMaskToggle] = useState(false);
  const [maskExpDate, setExpDateMaskToggle] = useState(false);

  // toggle mask card number 
  const maskNumberToggle = () => {
    setNumberMaskToggle(!maskCardNumber)
  }
  //show and mask card cvv
  const maskCvvToggle = () => {
    setCvvMaskToggle(!maskCardCvv)
  }

  //show and mask expire date
  const maskExpDateToggle = () => {
    setExpDateMaskToggle(!maskExpDate)
  }

  //set card focus
  const [focus, setFocus] = useState('');
  //custom hooks
  const { handleChange, handleSubmit, values, errors } = useForm();

  // update card details 

  const handleUpdate = async () => {
    // get session storage data

    let items = JSON.parse(sessionStorage.getItem('cardDetails'));

    const newId = id ? id : 0;
    //loof through data
    items.forEach(async (item, index) => {

    
      // check if item id matches changing value id
      if (index === newId) {

        // encypt card details
        // encrypt card number
        // encrypt card cvc
        // encrypt card expiry_date
        const card_number = await CryptoJS.AES.encrypt(values.number, decryptKey.key).toString();
        const card_cvc = await CryptoJS.AES.encrypt(values.cvc, decryptKey.key).toString();
        const card_exp_date = await CryptoJS.AES.encrypt(values.exp, decryptKey.key).toString();

        //set new object

        const updatedObj = {

          name: values.name ? values.name : item.name,
          card_number: values.number ? card_number : item.card_number,
          cvv: values.cvc ? card_cvc : item.cvv,
          expiry_date: values.exp ? card_exp_date : item.expiry_date,
          timestamp: item.timestamp,
          updatedAt: new Date(),
        }

        items.push(updatedObj);

        //push data to new array
        await sessionStorage.setItem('cardDetails', JSON.stringify([updatedObj]));

        //navigae to home after success
        
        navigate("/");
      }
    })

  }
  return (
    <EditContainer>

      <EditWrapper>

        <EditRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <EditHeading lightText={lightText}>{card_holder}</EditHeading>
              <SubHeader>{subHeader1}</SubHeader>
              <ContentWrap>

                <Heading lightTextDesc={lightTextDesc}>{maskCardNumber ? card_number : ms_card}</Heading>
                <Eye onClick={maskNumberToggle} />
              </ContentWrap>
              <SubHeader>{subHeader2}</SubHeader>
              <ContentWrap>

                <Heading lightTextDesc={lightTextDesc}>{maskCardCvv ? card_cvc : ms_cvv}</Heading>
                <Eye onClick={maskCvvToggle} />
              </ContentWrap>
              <SubHeader>{subHeader3}</SubHeader>
              <ContentWrap>

                <Heading lightTextDesc={lightTextDesc}>{maskExpDate ? card_exp : ms_exp_date}</Heading>
                <Eye onClick={maskExpDateToggle} />
              </ContentWrap>
              <Subheading darkText={darkText}>{timeStamp}</Subheading>
            </TextWrapper>
          </Column1>

          <Column2>
            <ImgWrap>
              <Img src={img} alt={'avatar'} />
            </ImgWrap>
          </Column2>
        </EditRow>

      </EditWrapper>

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
            <Form onSubmit={handleUpdate}>
              <FormInputWrap>
                <FormInput
                  type='text'
                  label='Card Holder Name'
                  value={values.name}
                  name='name'
                  size='small'
                  fullWidth
                  placeholder={card_holder}
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
                  placeholder={card_number}
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
                    placeholder={card_exp}
                    error={errors.cexp}
                    onChange={handleChange}
                    onFocus={e => setFocus(e.target.name)}
                  />
                </FormInputWrap>

                <FormInputWrap>
                  <FormContentInput
                    type='number'
                    label='cvc'
                    placeholder={card_cvc}
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
                <SubmitCardButton
                  type="submit"
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  fontBig={fontBig ? 1 : 0}
                  big={big ? 1 : 0}>Submit Card Details</SubmitCardButton>
              </BtnWrap>

              {
                errors.message && <Alert severity={errors.variant}>{errors.message}</Alert>

              }

            </Form>
          </CardContainer>
        </CardWrapper>
      </AddCardContainer>
    </EditContainer>
  )
}
