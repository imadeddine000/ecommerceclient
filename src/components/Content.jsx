import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import React,{useState,useEffect} from 'react'
import Product from './Product'
import axios from 'axios'

const Content = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    axios.get('https://e-commerceiek.herokuapp.com/products').then(response=>{
      setproducts(response.data)
    })
  }, []);
  return (
    <>
         <Box sx={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',fontSize:25,margin:2,}}>
         Our Products
         </Box>
        <Container sx={{marginTop:1,color:'white'}}>
          <Grid container  sx={{margin:1}} >
            {products.map((item,index)=>(
              <Grid item xs={6} md={3} sx={{textAlign:'center',width:{xs:200}}}  key={index}>
                <Product product={item}/>
              </Grid>
            ))}
            
          </Grid>
        </Container>
    </>
  )
}

export default Content