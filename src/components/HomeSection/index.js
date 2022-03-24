import React from 'react'
import { smlWidgetObj, lrgWidgetObj } from '../ObjData'
import ViewCardsSection from '../Widgets/ViewCardsSection';
import AddCardsSection from '../Widgets/AddCardSection';
import { HomeContainer, WidgetContainer } from './HomeElements'
import { submitButtonObj } from '../ObjData';

export default function HomeSection() {
  return (
    <HomeContainer>

      <WidgetContainer>
        <ViewCardsSection {...smlWidgetObj} />
        <AddCardsSection {...lrgWidgetObj} {...submitButtonObj} />
      </WidgetContainer>
    </HomeContainer>
  )
}
