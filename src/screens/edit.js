import React from 'react'
import EditCardSection from '../components/EditCardSection'
import { editObj } from '../components/ObjData'

export default function ViewEditScreen() {
  return (
  <EditCardSection {...editObj}/>
  )
}
