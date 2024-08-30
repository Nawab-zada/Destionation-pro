import React, { useState } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Homepage = () => {
    const [flightData, setFlightData] = useState({
        from: '',
        to: '',
        depart: '',
        return: '',
        cabin: '',
    })

    const handlechange = (e) => {
        const { name, value } = e.target
        setFlightData({
            ...flightData,
            [name]: value
        })
    }

    return (
        <div className='bg-[#213638] text-white '>
            <header className='px-5 sm:px-14 py-20 flex flex-col gap-10'>
                <main className='flex flex-wrap gap-5 justify-between'>
                    <h1 className='max-w-[18rem] text-3xl sm:text-5xl shadows'>Destination Travel&Tours</h1>
                    <div>
                        <ul className='flex gap-3'>
                            <li>
                                <button className='bg-[#026ce8] py-1 px-5 rounded-xl'>Login</button>
                            </li>
                            <li>
                                <button className='bg-[#026ce8] py-1 px-5 rounded-xl'>Create Account</button>
                            </li>
                        </ul>
                    </div>
                </main>
                <div>
                    <ul className='flex flex-wrap gap-3 sm:gap-6'>
                        {
                            Navigation.map((data, index) => (
                                <li key={index} >
                                    <button className='border border-white rounded-2xl px-7 sm:px-10 py-1'>{data}</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='text-2xl sm:text-4xl'>
                    <h1 >Delivering World-Class Travel Experiences Since 1973.</h1>
                </div>

                <div className='flex flex-wrap gap-4 text-black'>
                    <div className='bg-white py-2 pl-10 flex-grow rounded-l-2xl'>
                        <p className='font-semibold'>From</p>
                        <input onChange={handlechange} value={flightData.from} type="text" name="from" placeholder='Country,City,Airport' className='py-2' />
                    </div>
                    <div className='bg-white py-2 flex-grow px-3'>
                        <p className=' font-semibold'>To</p>
                        <input type="text" onChange={handlechange} value={flightData.to} name="to" placeholder='Country,City,Airport' className='py-2' />
                    </div>
                    <div className='bg-white py-2 flex-grow px-3'>
                        <p className='font-semibold'>Depart</p>
                        <input type="text" onChange={handlechange} value={flightData.depart} name="depart" placeholder='Add Date' className='py-2' />
                    </div>
                    <div className='bg-white py-2 flex-grow px-3'>
                        <p className='font-semibold'>Return</p>
                        <input type="text" onChange={handlechange} value={flightData.return} name="return" placeholder='Add Date' className='py-2' />
                    </div>
                    <div className='bg-white py-2 px-3 flex-grow rounded-r-2xl'>
                        <p className='font-semibold'>Travelers & Cabin Class</p>
                        <input type="text" onChange={handlechange} value={flightData.cabin} name="cabin" placeholder='1 Adult, Economy' className='py-2' />
                    </div>
                    <div className='bg-[#026ce8] text-white px-7 flex-grow rounded-xl grid place-items-center'>
                        <button type='submit'>
                            Check
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-y-5 gap-x-11'>
                    <div className='flex flex-wrap gap-5'>
                        <label className='flex items-center justify-center gap-x-3'>
                            <input type="checkbox" name="" id="" /> Add Nearby Airports
                        </label>
                        <label className='flex items-center justify-center gap-x-3'>
                            <input type="checkbox" name="" id="" /> Add Nearby Airports
                        </label>
                    </div>
                    <div className='flex'>
                        <label className='flex gap-x-3 '>
                            <input type="checkbox" name="" id="" /> Direct Flights
                        </label>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Homepage

const Navigation = [
    "Home",
    "Airlines",
    "Services",
    "About Us",
    "Contact",
]