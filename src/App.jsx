import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactUs from './Pages/ContactUs'
import Footer from './Pages/Footer'
import Homepage from './Pages/Homepage'
import Experiences from './Pages/Experiences'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ContactUs />
      <Footer /> */}
      <Homepage/>
      <Experiences/>  
    </>
  )
}

export default App
