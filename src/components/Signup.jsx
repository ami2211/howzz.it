import { Button } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';

const Signup = () => {
  return (
    <div>
       <h1>Signup</h1>
       <TextField id="filled-basic" label="firstname" variant="filled" />
      <br></br>
      <TextField id="filled-basic" label="lastname" variant="filled" />
      <br></br>
      <TextField id="filled-basic" label="email" variant="filled" />
      <br></br>
      <TextField type={"password"} id="filled-basic" label="password" variant="filled" />
      <br></br>
      <br></br>
    
      <Button variant="contained" color='primary' >Signup</Button>
    </div>
  )
}

export default Signup
