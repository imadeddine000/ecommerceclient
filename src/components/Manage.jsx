import React,{useState} from 'react'
import {Button, Input, Paper} from '@mui/material'
import axios from 'axios'
const Manage = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const handleAddAdmin=()=>{
    axios.post('http://localhost:3001/admins',{username,password})
    setusername('')
    setpassword('')
  }
  return (
    <>
      <Paper sx={{fontSize:20,textAlign:'center',padding:2}}>
        add new admins
      </Paper>
      <Paper sx={{display:'flex',flexDirection:'column',padding:2}}>
        <Input placeholder='admin username' sx={{padding:2,fontSize:20,margin:2}} onChange={(e)=>setusername(e.target.value)} value={username}/>
        <Input type='password' placeholder='admin password' sx={{padding:2,fontSize:20,margin:2}} onChange={(e)=>setpassword(e.target.value)} value={password}/>
        <Button variant='contained' sx={{margin:2,padding:2,fontSize:20}} onClick={handleAddAdmin}>add</Button>
      </Paper>
    </>
  )
}

export default Manage