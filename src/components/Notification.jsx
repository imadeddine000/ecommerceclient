import { Box } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Notification = () => {
  return (
    <>
        <Container sx={{backgroundColor:'white',marginTop:6,paddingBottom:7,display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Box>
              <a href="#">this is notification section</a>
            </Box>
        </Container>
    </>
  )
}

export default Notification