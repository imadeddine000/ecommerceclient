import React from 'react'
import {TableCell,TableRow, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'
import Image from 'next/image'

const ProductRow = ({product}) => {
  const handleDelete=(id)=>{
    const item=id
    axios.post('https://e-commerceiek.herokuapp.com/delete',{id:item}).then(response=>{
      console.log(response)
    })
  }
  return (
    <>
        <TableRow>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell sx={{width:5,height:5}}>
                <img src={product.img} alt={product.title} style={{width:'100%'}} layout='fill'/>
              </TableCell>
              <TableCell align='right'>
                <IconButton onClick={()=>handleDelete(product._id)}>
                  <DeleteIcon/>
                </IconButton>
              </TableCell>
        </TableRow>
    </>
  )
}

export default ProductRow