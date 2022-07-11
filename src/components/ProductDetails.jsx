import React from 'react'
import { Container,Card } from '@mui/system'
import Buy from './Buy'
import Navbar from './Navbar'
import Image from 'next/image'
const Productdetails = ({item}) => {
  return (
    <>
            <Navbar/>
            <Container sx={{heigth:'100vh',backgroundColor:'white',display:'flex',padding:5,flexDirection:{xs:'column',sm:'column',md:'row'},alignItems:{xs:'center',md:'flex-start'}}}>
               
               <div>
                   <img src={item.img} alt="" style={{width:'300px',height:'300px'}}/>
               </div>
               <div style={{margin:'10px'}}>
                   <h1>{item.title}</h1>
                   <h4 style={{color:'red'}}>{item.price}</h4>
               </div>     
           </Container> 
           <Buy/> 

    </>
  )
}

export default Productdetails