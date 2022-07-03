import React from 'react'
import {Button, Container, Input, Paper,Typography} from '@mui/material'
import { useState } from 'react'
import axios from 'axios'
const Login = ({handleloggedin}) => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [message, setmessage] = useState('');
  const handlelogin=()=>{
    axios.post('http://localhost:3001/login',{username,password}).then((response)=>{
      handleloggedin(response.data.token)
      setmessage(response.data.message)

      if(response.data.state){
        setTimeout(()=>{
          window.location.href='/admin'
        },1000)
      }else{
        setTimeout(()=>{
          setmessage('')
          setpassword('')
          setusername('')
        },2000)
      }
    })
    
  }
  return (
    <>
    
        <Container sx={{backgroundColor:'white',height:'100vh',display:'flex',flexDirection:'column'}}>
        <Paper sx={{padding:2,textAlign:'center',fontSize:15,fontWeight:'bold',margin:2}}>
        admin page
        </Paper>
            <Input placeholder='username' sx={{padding:2,margin:2,fontSize:15}} onChange={(e)=>setusername(e.target.value)} value={username}/>
            <Input placeholder='password' type='password' sx={{padding:2,margin:2,fontSize:15}} onChange={(e)=>setpassword(e.target.value)} value={password}/>
            <Button sx={{padding:2,margin:2,fontSize:15}} variant='contained' onClick={handlelogin}>Login</Button>
            <Paper sx={{margin:2,textAlign:'center',backgroundColor:'red',fontSize:10}}>
               <Typography sx={{fontSize:15}}>
                {message}
               </Typography>
             </Paper>
        </Container>
        
    </>
  )
}

export default Login