import React from 'react'
import BannedCSection from '../components/BannedCSection'
import { globeObj } from '../components/ObjData'

export default function BannedScreen() {
  return (
   <BannedCSection {...globeObj}/>
  )
}
