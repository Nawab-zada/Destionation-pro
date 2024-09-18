import React from 'react'
import ContactForm from './ContactForm'
import Banner from '../assets/bs2.png'

const ContactUs = () => {
    return (
        <div className=''>
            
            <div className='flex justify-center flex-wrap gap-20 px-10'>
                <div className='flex items-center'>
                    <img src={Banner} alt="" className='w-[25rem] h-[20rem]' />
                </div>
                <div className='md:flex-grow'>
                    <ContactForm />
                </div>
            </div>
        </div >
    )
}

export default ContactUs;

const Navigation = [
    "Home",
    "Airlines",
    "Services",
    "About Us",
    "Contact",
]