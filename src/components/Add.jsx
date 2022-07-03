import { Button, Input, Paper } from '@mui/material'
import React from 'react'
import Axios from 'axios'
import {useState} from 'react'
const Add = () => {
const [title, settitle] = useState('');
const [price, setprice] = useState('');
const [img, setimg] = useState('');
const handleAdd=()=>{
  Axios.post('https://e-commerceiek.herokuapp.com/addproduct',{title:title,price:price,img:img}).then(resposne=>{
    console.log(resposne.data)
  })
  setprice('')
  settitle('')
  setimg('')
}
  return (
    <>
      <Paper sx={{display:'flex',flexDirection:'column',padding:5}}>
        <Input sx={{margin:2,fontSize:20}} placeholder='title' onChange={(e)=>settitle(e.target.value)} value={title} />
        <Input sx={{margin:2,fontSize:20}} placeholder='price' onChange={(e)=>setprice(e.target.value)} value={price} />
        <Input sx={{margin:2,fontSize:20}} placeholder='image link' onChange={(e)=>setimg(e.target.value)} value={img}/>
        <Button variant='contained' sx={{margin:2,padding:2,fontSize:20}} onClick={handleAdd}>add</Button>
      </Paper>
    </>
  )
}

export default Add