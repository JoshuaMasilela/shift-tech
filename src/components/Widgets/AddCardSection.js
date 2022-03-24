import React, { useState } from 'react'
import useForm from '../useForm';
import { AddCardContainer, AddCardTitle, CardContainer, Form, FormContent, FormInput } from './Elements/AddCardElements';
import Cards from 'react-credit-cards'; //install using --legacy-peer-deps
import 'react-credit-cards/es/styles-compiled.css';

export default function AddCardSection({
  title
}) {

  //set card focus
  const [ focus, setFocus ] = useState('');
  //custom hooks
  const { handleChange, handleSubmit, values, errors } = useForm();
  return (
    <AddCardContainer>
      <AddCardTitle>{title}</AddCardTitle>

      <CardContainer>
        <Cards
          cvc={values.cvc}
          expiry={values.exp}
          focused={focus}
          name={values.name}
          number={values.number} />

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

            <FormInput
              type='number'
              placeholder='Expiration Date'
              value={values.exp}
              name='exp'
              onChange={handleChange}
              onFocus={e => setFocus(e.target.name)}
            />

            <FormInput
              type='number'
              placeholder='CVC'
              value={values.cvc}
              name='cvc'
              onChange={handleChange}
              onFocus={e => setFocus(e.target.name)}
            />

          </FormContent>
        </Form>
      </CardContainer>
    </AddCardContainer>
  )
}
