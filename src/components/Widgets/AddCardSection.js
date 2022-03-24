import React from 'react'
import { AddCardContainer, AddCardTitle } from './Elements/AddCardElements'

export default function AddCardSection({
  title
}) {

  //custom hooks
  const { handleChange, handleFocus, handlSubmit, values, errors } = useForms();
  return (
    <AddCardContainer>
      <AddCardTitle>{title}</AddCardTitle>
    </AddCardContainer>
  )
}
