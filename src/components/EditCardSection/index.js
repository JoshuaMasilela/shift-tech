import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Column1,
  Column2,
  ContentWrap,
  EditBoxWrapper,
  EditContainer,
  EditForm,
  EditHeading,
  EditInput,
  EditRow,
  EditTitle,
  EditWrapper,
  Eye,
  Header,
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
            <Form onSubmit={handleSubmit}>
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
