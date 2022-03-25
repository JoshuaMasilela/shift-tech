import React from 'react'
import HomeSection from '../components/HomeSection'
import Navbar from '../components/NavBar/Navbar'
import { navObj } from '../components/ObjData'

export default function HomeScreen() {
  return (
    <>
    <Navbar {...navObj}/>
    <HomeSection/>
    </>
  )
}
