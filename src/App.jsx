import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sign from "./Sign.jsx"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../util/firebase'
import { createUser , removeUser} from '../util/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(()=>{onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName} = user;
      dispatch(createUser({uid:uid,email:email,displayName:displayName}))
      navigate("/browser")
    } else {
      dispatch(removeUser())
      navigate("/")
    }
  })},[])
  return (
    <>
       <img src="https://wallpapers.com/images/high/netflix-background-gs7hjuwvv2g0e9fj.webp" alt=""  className='w-full h-full sm:h-full' />
       <Sign />
    </>
  )
}

export default App
