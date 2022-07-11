import Button from '@mui/material/Button'
import Navbar from '../src/components/Navbar'
import Product from '../src/components/Product'
import Content from '../src/components/Content'
import SwiperCom from '../src/components/Swiper'
import { Container } from '@mui/system'
import GridProducts from '../src/components/GridProducts'
import Head from 'next/head'
import Notification from '../src/components/Notification'
import DrawerCom from '../src/components/Drawer'
import Footer from '../src/components/Footer'
import Image from 'next/image'
export default function Home() {
  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
    </Head>
      <Navbar/>
      <DrawerCom/>  
       <Container sx={{height:'40vh'}}>
        <SwiperCom/>
      </Container>
      
      <Content/> 
      <Footer/>
    </>
  )
}
