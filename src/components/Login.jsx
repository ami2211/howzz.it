import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>facebook</h1>
      <input placeholder='Email'></input>
      <br></br>
      <input type={'password'} placeholder='password'></input>
      <br></br>
      <br></br>
      <button>login</button>
      <Typography variant='h1'>welcome to react</Typography>
      <TextField label="email" variant="filled"/>
      <br></br>
      <TextField type={'password'} label="password" variant="filled"/>
      <br></br>
      <Button variant="contained" color='primary' >Login</Button>
    </div>
  )
}

export default Login
