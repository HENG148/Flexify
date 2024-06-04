import React, { useState } from 'react'
import { TextField } from '@mui/material'

export default function LogIn() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <>
      <div>
        <form className='grid gap-y-4'>
          <div>
            <TextField
              name='email'
              className='w-full'
              value={formData.email}
              label='Email Address*'
              onChange={handleChange}
            />
          </div>

          <div>
            <TextField
              name='password'
              className='w-full'
              value={formData.password}
              label='Password*'
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </>
  )
}
