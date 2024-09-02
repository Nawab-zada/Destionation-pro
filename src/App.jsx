import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactUs from './Pages/ContactUs'
import Footer from './Pages/Footer'
import Homepage from './Pages/Homepage'
import Experiences from './Pages/Experiences'
import ContactForm from './Pages/ContactForm'
import HomePageT from './Pages/HomePageT'
import LoginPage from './Pages/LoginPage'
import SignUp from './Pages/SignUp'
// import ServicesPage from './Pages/ServicesPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContactUs />
      <Footer />
      <Homepage/>
      <Experiences/>  
      <ContactForm/>
      <HomePageT/>
      <LoginPage/>
      <SignUp/>
      {/* <ServicesPage/> */}
    </>
  )
}

export default App
