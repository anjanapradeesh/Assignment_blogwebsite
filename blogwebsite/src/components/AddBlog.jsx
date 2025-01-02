import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const AddBlog = () => {
return (
    <div>
      <Typography variant='h3' color='success'>BLOG FORM</Typography>
      <Box 
          sx={{
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center", 
            maxWidth: 600, 
            margin: "auto", 
            padding: 4, 
            boxShadow: 6, 
            borderRadius: 3, 
            backgroundColor: "#f3e5f5", 
            marginTop: 4,
            paddingBottom: 6,
            transition: "all 0.3s ease"
          }}
        >
        <br/>
        <TextField label='Blog Name' variant='outlined'/><br /><br />
        <TextField label='Description' variant='outlined'/><br /><br />
        <TextField label='Author Name' variant='outlined'/> <br /><br />
        <Button variant='contained' color='success'>Add</Button>
        </Box>
    </div>
  )
}

export default AddBlog