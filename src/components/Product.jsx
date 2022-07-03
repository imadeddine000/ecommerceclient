import { Box, Card } from '@mui/material'
import React from 'react'
import Image from 'next/image'

const Product = ({product}) => {
  
  return (
    <>
        <Card variant="outlined" sx={{backgroundColor:'white',color:'white',borderRadius:0,padding:1,paddingTop:2,paddingBottom:2,color:'black','&:hover':{border:'1px solid white',cursor:'pointer'}}}>
            <Box sx={{}}>
              <Image src={product.img} alt="" style={{width:'100%',height:'200px',objectFit:'cover'}} />
            </Box>
            <Box sx={{textAlign:'start',margin:1,fontSize:{xs:10},'&:hover':{color:'orange'},height:{xs:70}}}>
              <a href={"/products/"+product._id}>
                {product.title}
              </a>
            </Box>
            <Box sx={{textAlign:'start',marginTop:{xs:5},color:'red'}}>
              {product.price}
            </Box>
            <Box sx={{textAlign:'center',backgroundColor:'gray',width:55,borderRadius:5,margin:1}}>
              Flash sale
            </Box>
            <Box sx={{textAlign:'center',backgroundColor:'orange',borderRadius:2,margin:{xs:1,sm:3,md:3},padding:{xs:1},fontSize:{xs:10},fontWeight:'bold'}}>
              <a href={"/products/"+product._id}>
                Buy
              </a>
            </Box>
        </Card>
    </>
  )
}

export default Product