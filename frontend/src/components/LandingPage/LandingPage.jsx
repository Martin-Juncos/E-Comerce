import React from 'react'
import { Link } from 'react-router-dom'
import {Login} from '../Login/Login'
import {Logout} from '../Logout/Logout'
import {Profile} from '../Profile/Profile'
import { useAuth0 } from '@auth0/auth0-react'

const LandingPage = () => {
  const {isAuthenticated} = useAuth0()
  return (
    <div>
        <Link to= '/home' >
        <button>Home</button>
        </Link>
        {isAuthenticated ? (
        <>
          <Profile />
          <Logout />
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default LandingPage