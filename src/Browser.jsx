import React from 'react'
import { removeUser } from '../util/userSlice'
import { auth } from '../util/firebase'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
const Browser = () => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between p-2 m-2 '>
    <div>Browser</div>
    <div className='flex align-middle justify-between'>
    <div className='font-mono font-extrabold'>HII</div>
    <div className='bg-red-600 text-black p-2 m-2 hover:cursor-pointer rounded-lg' onClick={()=>{
      
      signOut(auth).then(() => {
      navigate("/")
      }).catch((error) => {
        // An error happened.
      });
            

    }}>Log Out</div>
    </div>
    
    </div>
  )
}

export default Browser