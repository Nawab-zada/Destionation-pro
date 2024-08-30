import React from 'react'
import ContactForm from './ContactForm'
import Banner from '../assets/bs2.png'

const ContactUs = () => {
    return (
        <div className=''>
            <div className='pb-20'>
                <ul className='flex bg-[#d9d9d9] justify-center py-10 flex-wrap gap-3 sm:gap-6'>
                    {
                        Navigation.map((data, index) => (
                            <li key={index} >
                                <button className='bg-[#213638] text-white border rounded-2xl px-7 sm:px-10 py-1'>{data}</button>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className='flex justify-center flex-wrap gap-20 px-10'>
                <div className='flex items-center'>
                    <img src={Banner} alt="" className='w-[30rem] h-[25rem]' />
                </div>
                <div className='md:flex-grow'>
                    <ContactForm />
                </div>
            </div>
        </div >
    )
}

export default ContactUs

const Navigation = [
    "Home",
    "Airlines",
    "Services",
    "About Us",
    "Contact",
]