import { Drawer,Box, IconButton, } from '@mui/material'
import React,{useState} from 'react'
import Link from 'next/link'
import Menu from '@mui/icons-material/Menu'

const DrawerCom = ({handleClose,state}) => {
      const links=["Store","Mac","iPad","iPhone","Watch","Airpods","Support"]
      
  return (
    <>
        <Drawer
        open={state}
        onClose={!state}
        
        >
             <Box sx={{display:'flex',flexDirection:'column',fontSize:20}}>
              <IconButton onClick={handleClose} sx={{display:'flex',justifyContent:'flex-start'}}>
                <Menu sx={{fontSize:30,color:'black'}}/>
              </IconButton>
                {links.map((link,index)=>(
                    <Link href={link} key={index} >
                     <Box sx={{padding:2,paddingRight:8,paddingLeft:8,cursor:'pointer','&:hover':{backgroundColor:'gray'}}}>
                      {link}
                      </Box>  
                    </Link>
                ))}
                </Box>
        </Drawer>
    </>
  )
}

export default DrawerCom