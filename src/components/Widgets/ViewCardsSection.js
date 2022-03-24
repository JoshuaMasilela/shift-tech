import React from 'react'
import { ViewCardsContainer, ViewCardsTitle } from './Elements/ViewCardsElements'

export default function ViewCardsSection({
  title
}) {
  return (
  <ViewCardsContainer>
    <ViewCardsTitle>{title}</ViewCardsTitle>
  </ViewCardsContainer>
  )
}
