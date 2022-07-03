import { AppBar, Box, IconButton } from '@mui/material'
import { Container } from '@mui/system'
import React,{useState} from 'react'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import CircleIcon from '@mui/icons-material/Circle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DrawerCom from './Drawer';
import FullScreenDialog from './Search';
const Navbar = () => {
    const [open, setopen] = useState(false);
    const [opensearch, setOpensearch] = React.useState(false);
    const handleDialogOpen=()=>{
        setOpensearch(true)
    }
    const handleDialogClose=()=>{
        setOpensearch(false)
    }
    const handleOpen=()=>{
        setopen(true)
    }
    const handleClose=()=>{
        setopen(false)
    }
    const links=["Store","Mac","iPad","iPhone","Watch","Airpods","Support"]
  return (
    <>
        <AppBar sx={{backgroundColor:'#131313',boxShadow:'none'}}>
            <Container sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <IconButton onClick={handleOpen} sx={{display:{md:'none',xs:'block'},color:'white',alignContent:'center',}}>
                    <MenuIcon/>
                </IconButton>
                <Link href="/"  >
                    <CircleIcon style={{cursor:'pointer'}} />
                </Link>
                <Box sx={{flex:1,display:{xs:'none',md:'flex'},justifyContent:'space-between',marginRight:2,marginLeft:2,alignItems:'center',padding:2}}>
                {links.map((link,index)=>(
                    <Link href={link} key={index}>
                     <Box sx={{"&:hover":{color:'orange',cursor:'pointer'}}}>
                     {link}    
                      </Box> 
                    </Link>
                ))}
                </Box>
                <IconButton sx={{color:'white',display:{xs:'flex',md:'flex'},marginRight:2}} onClick={handleDialogOpen}>
                    <SearchOutlinedIcon/>
                </IconButton>
                <Link href="/admin" sx={{color:'white'}}>
                    <AccountCircleOutlinedIcon sx={{cursor:'pointer'}}/>
                </Link>
            </Container>
        </AppBar>
        <DrawerCom state={open} handleClose={handleClose}/>
        <FullScreenDialog opensearch={opensearch} closesearch={handleDialogClose}/>           
    </>
  )
}

export default Navbar