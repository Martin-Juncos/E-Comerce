import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'


const LandingPage = () => {
  
  return (
    <div>
      <NavBar/>
        <Link to= '/home' >
        <button>Home</button>
        </Link>
    </div>
  )
}

export default LandingPage