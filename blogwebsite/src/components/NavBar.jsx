import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div >
        <AppBar color="success" >
            <Toolbar>
                <Typography variant='h6'>DASHBOARD</Typography>&nbsp;&nbsp;
                <Link to="/Home"><Button variant='contained' color='secondary'>Home</Button>
                </Link>&nbsp;&nbsp;
                <Link to="/AddBlog"><Button variant='contained' color='secondary'>Add Blog</Button>
                </Link>&nbsp;&nbsp; 
            </Toolbar>
        </AppBar>
        <br /><br />

    </div>
  )
}

export default NavBar