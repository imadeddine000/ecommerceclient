import { Container,Box } from '@mui/system'
import React from 'react'
import Link from 'next/link'
import { BottomNavigation, BottomNavigationAction, Button, Paper, Typography } from '@mui/material'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import Products from './products'
import Add from './Add'
import Manage from './Manage'
const Control = ({isloggedin}) => {

   const [component,setcomponent]=React.useState(<Products/>)
//    switch (window.location.pathname) {
//         case '/admin/':
//             component=<>products</>
//             break;
//             case '/admin/add':
//                 component=<>add</>
//                 break;
//             case '/admin/manage':
//                 component=<>manage</>
//                 break;    
//         default:
//             component=<>products</>
//             break;
//     }
    
  return (
    <>
    <Container sx={{backgroundColor:'white',padding:2,height:'100vh'}}>
      <Paper sx={{display:'flex',justifyContent:'flex-end',margin:2,padding:1}}>
        <Button
         variant='contained'
        onClick={()=>{window.localStorage.removeItem('token');window.location.href='/admin'}}
        >
          log out
        </Button>
      </Paper>
      {component}
      
      </Container>
   
    <Box sx={{position:'relative'}}>
        <BottomNavigation
            showLabels
            sx={{position:'fixed',bottom:0,width:'100%',}}
            
        >
            <BottomNavigationAction label="products" icon={<PersonOutlineIcon/>} onClick={()=>setcomponent(<Products/>)}/>
            <BottomNavigationAction label="add" icon={<AddIcon/>} onClick={()=>setcomponent(<Add/>)}/>
            <BottomNavigationAction label="manage" icon={<SettingsIcon/>} onClick={()=>setcomponent(<Manage/>)}/>
        </BottomNavigation>
    </Box>
    </>
  )
}

export default Control