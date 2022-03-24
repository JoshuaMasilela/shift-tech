import React, { useState } from 'react'
import useForm from '../useForm';
import { AddCardContainer, AddCardTitle, BtnWrap, CardContainer, CardWrapper, Form, FormContent, FormContentInput, FormInput } from './Elements/AddCardElements';
import Cards from 'react-credit-cards'; //install using --legacy-peer-deps
import 'react-credit-cards/es/styles-compiled.css';
import { SubmitCardButton } from '../ButtonElements';

export default function AddCardSection({
  title,
  primary,
  big,
  fontBig,
  dark
}) {

  //set card focus
  const [ focus, setFocus ] = useState('');
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
      

        <Form onSubmit={handleSubmit}>
          <FormInput
            type='text'
            placeholder='Card Holder Name'
            value={values.name}
            name='name'
            onChange={handleChange}
            onFocus={e => setFocus(e.target.name)}
          />

          <FormInput
            type='tel'
            placeholder='Card Number'
            value={values.number}
            name='number'
            onChange={handleChange}
            onFocus={e => setFocus(e.target.name)}
          />
          <FormContent>

            <FormContentInput
              type='number'
              placeholder='Expiration Date'
              value={values.exp}
              name='exp'
              onChange={handleChange}
              onFocus={e => setFocus(e.target.name)}
            />

            <FormContentInput
              type='number'
              placeholder='CVC'
              value={values.cvc}
              name='cvc'
              onChange={handleChange}
              onFocus={e => setFocus(e.target.name)}
            />
          </FormContent>

          <BtnWrap>
            <SubmitCardButton
            primary={primary ? 1: 0}
            dark={dark ? 1: 0}
            fontBig={fontBig ? 1: 0}
            big={big ? 1: 0}>Submit Card Details</SubmitCardButton>
          </BtnWrap>
        </Form>
      </CardContainer>
      </CardWrapper>
    </AddCardContainer>
  )
}
