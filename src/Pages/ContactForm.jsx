import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        phonenumber: '',
        email: '',
        comments: ''
    })

    const handlechange = (e) => {
        const { id, value } = e.target
        setFormData({
            ...formData,
            [id]: value
        })
    }

    const handlesubmit = async (e) => {
        e.preventDefault()
        const { firstname, lastname, phonenumber, email, comments } = formData;
        if (!firstname || !lastname || !phonenumber || !email || !comments) {
            alert("All fields Required")
            return;
        }
        try {
            // const resp = await axios.post('url', formData)
            // const data = await resp.data
            // console.log(data)
            alert("Email send Successfully")
            setFormData({
                firstname: '',
                lastname: '',
                phonenumber: '',
                email: '',
                comments: ''
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    console.log(formData)
    return (
        <div className='max-w-[55rem] text-center'>
            <div className='text-center py-5'>
                <h1 className='capitalize text-2xl'>Know more about travel air international</h1>
            </div>
            <Box
                component="form"
                noValidate
                onSubmit={handlesubmit}
                autoComplete="off"
            >
                <div className='grid grid-cols-1 gap-5 border border-gray-800 rounded-xl py-10 px-10'>
                    <div className='flex gap-5 sm:gap-10 flex-wrap sm:flex-nowrap'>
                        <TextField id="firstname" fullWidth label="First Name" value={formData.firstname} variant="outlined" onChange={handlechange} />
                        <TextField id="lastname" value={formData.lastname} fullWidth label="Last Name" variant="outlined" onChange={handlechange} />
                    </div>
                    <div className='flex gap-5 sm:gap-10 flex-wrap sm:flex-nowrap'>
                        <TextField id="phonenumber" fullWidth label="Phone Number" value={formData.phonenumber} variant="outlined" onChange={handlechange} />
                        <TextField id="email" fullWidth label="Email Address" value={formData.email} variant="outlined" onChange={handlechange} />
                    </div>
                    <div>
                        <TextField
                            id="comments"
                            label="Comments"
                            value={formData.comments}
                            onChange={handlechange}
                            fullWidth
                            multiline
                            rows={10}
                        />
                    </div>
                </div>
                <div className='text-center py-5'>
                    <button type='submit' className='bg-[#292e5e] py-2 px-10 text-white rounded-md'>
                        Submit
                    </button>
                </div>
            </Box >
        </div >
    )
}

export default ContactForm