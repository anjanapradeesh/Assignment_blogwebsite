import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, {useState } from 'react'
import "./Table.css"

const Home= () => {
    var [blog , setblog] = useState([])
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) =>{
            setblog(response.data)
        })
        .catch((error)=> console.log(error))
  return (
    
    <div>
        <TableContainer component={Paper}>
            <Table>
            <TableHead id="t1">
            <TableRow>
                <TableCell id="t2">ID</TableCell>
                <TableCell id="t2">Title</TableCell>
            </TableRow>
            </TableHead>
           
            <TableBody>
            {blog.map((val)=>{
            return(
                <TableRow id="t3">
                    <TableCell id='t3'>{val.id}</TableCell>
                    <TableCell id='t3'>{val.title}</TableCell>
                </TableRow>
            )})}
            </TableBody>
            </Table>
        </TableContainer>
    </div>
)}

export default Home