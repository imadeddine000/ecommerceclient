import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image'

import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Box, Container } from '@mui/system';
import { Input, ListItemAvatar, Paper } from '@mui/material';
import {useState,useEffect} from 'react'
import axios from 'axios'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({opensearch,closesearch}) {
  const [products, setproducts] = useState([]);
  const [search, setsearch] = useState('');
  const [searchnone, setsearchnone] = useState(true);
  useEffect(()=>{
    axios.get('https://e-commerceiek.herokuapp.com/products').then(response=>{
      setproducts(response.data)
    })
  },[])
    
  return (
    <div>
      <Button variant="outlined">
        Open full-screen dialog
      </Button>
      <Dialog
        fullScreen
        open={opensearch}
        onClose={!opensearch}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative',backgroundColor:'#131313' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="close"
              onClick={closesearch}
            >
              <CloseIcon />
            </IconButton>
            <Container>
                <Input placeholder='search products' sx={{color:'white',padding:'5px 20px 5px 20px',fontSize:25}} fullWidth={true} 
                  onChange={(e)=>setsearch(e.target.value)}
                />
            </Container>
            
          </Toolbar>
        </AppBar>
        <List >
            {products&& products.map((product,index)=>(
              <>
              {product.title.includes(search)&&search.length>0?
             
              <> 
               
              <ListItem button sx={{height:'100%'}}>
              <ListItemText sx={{color:'black'}}>
                  <a href={"/products/"+product._id}  style={{fontSize:'15px'}}>
                      {product.title}
                  </a>
              </ListItemText>
              <ListItemText sx={{fontSize:15}}>
                  {product.price}
              </ListItemText>
              <Box >
              </Box> 
              <ListItemAvatar sx={{width:150}}>
              <Image src={product.img} alt={product.title} style={{width:'100%'}} />
              </ListItemAvatar>   
           </ListItem>
            <Divider/>
          
              </>
              :()=>setsearchnone(true)}
              </>
         ))}
         {search.length<=0?<Paper>type something to search ...</Paper>:<></>}
        </List>
      </Dialog>
    </div>
  );
}
