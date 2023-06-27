import React from 'react'
import Carrusel from '../Carrusel/Carrusel'
import banner from '../../assets/banner.png'
import CardsContainer from '../CardsContainer/CardsContainer'

const Home = () => {
  return (
    <div>
        <Carrusel/>
        <img src={banner} alt="banner" width='100%' />
        <CardsContainer/>
    </div>
  )
}

export default Home