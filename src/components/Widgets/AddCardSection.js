import React, { useState } from 'react'
import useForm from '../useForm';
import { AddCardContainer, AddCardTitle, BtnWrap, CardContainer, CardWrapper, Form, FormContent, FormContentInput, FormInput, FormInputWrap } from './Elements/AddCardElements';
import Cards from 'react-credit-cards'; //install using --legacy-peer-deps
import 'react-credit-cards/es/styles-compiled.css';
import { SubmitCardButton } from '../ButtonElements';
import Alert from '@mui/material/Alert';

export default function AddCardSection({
  title,
  primary,
  big,
  fontBig,
  dark
}) {

  //set card focus
  const [focus, setFocus] = useState('');
  //custom hooks
  const { handleChange, handleSubmit, values, errors } = useForm();
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
          <Form>
            <FormInputWrap>
              <FormInput
                type='text'
                label='Card Holder Name'
                value={values.name}
                name='name'
                size='small'
                fullWidth
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
                  error={errors.cexp}
                  onChange={handleChange}
                  onFocus={e => setFocus(e.target.name)}
                />
              </FormInputWrap>

              <FormInputWrap>
                <FormContentInput
                  type='number'
                  label='CVC'
                  value={values.cvc}
                  name='cvc'
                  size='small'
                  onChange={handleChange}
                  onFocus={e => setFocus(e.target.name)}
                />
              </FormInputWrap>
            </FormContent>

            <BtnWrap>
              <SubmitCardButton
                onClick={handleSubmit}
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
  )
}
