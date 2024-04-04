import React, { useRef, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FaRegEye } from "react-icons/fa";
import { auth } from "../util/firebase"

const Sign = () => {
  const [signIn, setSignIn] = useState(false)
  const email = useRef();
  const [password, setPassword] = useState();
  const [confirmEmail, setConfirmEmail] = useState();
  const [credCheck, setCredCheck] = useState(null)
  const [showPassword, SetshowPassword] = useState(true)
  const validation = () => {
    setCredCheck(null)
    const validEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email.current.value);
    const validPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    if (!validEmail || !validPassword) {
      setCredCheck("Check email and password");
    }
    if (credCheck !== null) return;
    if (!signIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password).then((userCredential) => {
        const user = userCredential.user;
        alert("Account Created")
      })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setCredCheck(errorMessage);

        });
    }
    if (signIn) {

      signInWithEmailAndPassword(auth, email.current.value, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          alert("LOGGED INN");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setCredCheck(errorMessage);
        });



    }

  }
  return (
    <div className='bg-black   opacity-75  rounded-2xl    absolute top-52 left-[600px] w-2/6 h-auto'>
      <form className=' w-3/4  mx-auto '>
        <div className='font-extrabold text-2xl font-mono my-5 mx-2 text-center text-white  '>{signIn ? "Sign In" : "New User"}</div>

        {signIn ? "" : <input type="text" placeholder='Enter Your Name' value={confirmEmail} id="" className='w-full p-2 m-2 border-box  text-white border-white border-2 text-center bg-transparent' onChange={(e) => {
          setConfirmEmail(e.target.value);
        }} />}
        <input type="text" placeholder='Email Or Phone Number' ref={email} id="" className='w-full p-2 m-2 border-box  text-white border-white border-2 text-center bg-transparent' />

        <input type={showPassword ? "password" : "text"} placeholder='password' value={password} id="" className='w-full p-2 m-2 border-box  text-white border-white border-2 text-center bg-transparent' onChange={(e) => {
          setPassword(e.target.value);
        }} /> <FaRegEye className='bg-white absolute top-[165px] right-5 cursor-pointer' onClick={() => {
          SetshowPassword((prev) => !prev)
          // console.log(showPassword);
        }} />

        <p className='text-red-600 p-2 m-2 font-serif font-bold '>{credCheck ? `${credCheck}` : ""}</p>
        <button className='w-full bg-red-600  text-white p-2 m-2 ' onClick={(e) => {
          e.preventDefault()
          validation();
        }}>
          {signIn ? "Watch Now" : "Register !!!"}
        </button>

        <div className='font-extrabold text-xl font-mono my-5 mx-2 text-center text-white hover:cursor-pointer ' onClick={() => { setSignIn((prev) => !prev) }}>{signIn ? "New to Netflix ? Sign Up" : " Existing User ? Sign In"} </div>
      </form>
    </div>
  )
}

export default Sign