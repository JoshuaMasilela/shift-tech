import React from 'react'
import { AddCardContainer, AddCardTitle } from './Elements/AddCardElements'

export default function AddCardSection({
  title
}) {
  return (
    <AddCardContainer>
      <AddCardTitle>{title}</AddCardTitle>
    </AddCardContainer>
  )
}
