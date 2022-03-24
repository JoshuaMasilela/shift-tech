import React from 'react'
import { smlWidgetObj, lrgWidgetObj } from '../StaticData'
import ViewCardsSection from '../Widgets/ViewCardsSection';
import AddCardsSection from '../Widgets/AddCardSection';
import { HomeContainer, WidgetContainer } from './HomeElements'

export default function HomeSection() {
  return (
    <HomeContainer>

      <WidgetContainer>
        <ViewCardsSection {...smlWidgetObj} />
        <AddCardsSection {...lrgWidgetObj} />
      </WidgetContainer>
    </HomeContainer>
  )
}
