import React, { useState } from 'react'

const Sign = () => {
  const [signIn,setSignIn] = useState(true)
  const[email,setEmail] = useState();
  const[password,setPassword] = useState();
  const[confirmEmail,setConfirmEmail]=useState();
  const[confirmPassword,setConfirmPassword]=useState();
  const[credCheck,setCredCheck]=useState(false)
  return (
    <div className='bg-black   opacity-75  rounded-2xl    absolute top-52 left-[600px] w-2/6 h-3/5'>
    <form className=' w-3/4  mx-auto '>
      <div className='font-extrabold text-2xl font-mono my-5 mx-2 text-center text-white  '>{signIn?"Sign In":"New User"}</div>
      <input type="text" placeholder='Email Or Phone Number' value={email} id="" className='w-full p-2 m-2 border-box  text-white border-white border-2 text-center bg-transparent' onChange={ (e) =>{
        setEmail(e.target.value);
      }} />
      {signIn?"":<input type="text" placeholder='Confirm Email' value={confirmEmail} id="" className='w-full p-2 m-2 border-box  text-white border-white border-2 text-center bg-transparent' onChange={ (e) =>{
        setConfirmEmail(e.target.value);
      }} />}
      <input type="password" placeholder='password' value={password} id="" className='w-full p-2 m-2 border-box  text-white border-white border-2 text-center bg-transparent' onChange={ (e) =>{
        setPassword(e.target.value);
      }} />
      {signIn?"":<input type="password" placeholder='Confirm Password' value={confirmPassword} id="" className='w-full p-2 m-2 border-box  text-white border-white border-2 text-center bg-transparent' onChange={ (e) =>{
        setConfirmPassword(e.target.value);
      }} />}
      <button className='w-full bg-red-600  text-white p-2 m-2 ' onClick={(e)=>{
        e.preventDefault();
      }}>
       {signIn?"Watch Now":"Register !!!"}
      </button>
      
      <div className='font-extrabold text-xl font-mono my-5 mx-2 text-center text-white hover:cursor-pointer ' onClick={()=>{setSignIn((prev)=> !prev)}}>{signIn?"New to Netflix ? Sign Up" : " Existing User ? Sign In"} </div>
    </form>
    </div>
  ) 
}

export default Sign