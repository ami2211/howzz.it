import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}align='left'>
          <Link to="/" style={{color:'white', textDecoration:'none'}}>
          REACT</Link>
        </Typography>
        <Button color="inherit">
          <Link to="/login" style={{color:'white'}}>Login</Link>
          </Button>
        <Button color="inherit">
          <Link to="/signup" style={{color:'white'}}>Sign up</Link>
          </Button>
          
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Home
