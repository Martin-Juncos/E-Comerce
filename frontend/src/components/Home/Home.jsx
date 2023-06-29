import React, { useEffect } from 'react'
import Carrusel from '../Carrusel/Carrusel'
import banner from '../../assets/banner.png'
import CardsContainer from '../CardsContainer/CardsContainer'
import Footer from '../Footer/Footer'
import { useDispatch } from "react-redux";
import { allProducts } from '../../Redux/actions'
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);


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