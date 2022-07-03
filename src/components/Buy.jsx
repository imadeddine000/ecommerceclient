import { Input, Paper } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Button } from '@mui/material'

const Buy = () => {
  return (
    <>
        <Container>
            <Paper sx={{padding:2,fontSize:20,textAlign:'center',margin:2}}>
                buy this product
            </Paper>
            <Container sx={{display:'flex',flexDirection:'column'}}>
                <Input placeholder='full name' sx={{padding:2,fontSize:15}}/>
                <Input placeholder='full adress' sx={{padding:2,fontSize:15}}/>
                <Input placeholder='phone number' sx={{padding:2,fontSize:15}}/>
                <Button variant='contained' sx={{fontSize:15,padding:1,margin:5,backgroundColor:'orange'}}>Buy</Button>
            </Container>
        </Container>
    </>
  )
}

export default Buy