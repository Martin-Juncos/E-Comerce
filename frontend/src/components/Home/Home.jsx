import React from 'react'
import Carrusel from '../Carrusel/Carrusel'
import banner from '../../assets/banner.png'
import CardsContainer from '../CardsContainer/CardsContainer'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
        <Carrusel/>
        <img src={banner} alt="banner" width='80%' style={{paddingTop: 20}}/>
        <CardsContainer/>
        <Footer/>
    </div>
  )
}

export default Home