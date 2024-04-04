import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sign from "./Sign.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <img src="https://wallpapers.com/images/high/netflix-background-gs7hjuwvv2g0e9fj.webp" alt=""  className='w-full h-full' />
       <Sign />
    </>
  )
}

export default App
