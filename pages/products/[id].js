import { Container } from '@mui/system'
import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import Productdetails from '../../src/components/ProductDetails'
import Footer from '../../src/components/Footer'
const Details = () => {
  const [products, setproducts] = useState([]);
  const [id, setid] = useState('');
  useEffect(() => {
    let id=window.location.pathname.substring(10,window.location.pathname.length)
    setid(id)
    axios.get('http://localhost:3001/products').then(response=>{
        setproducts(response.data)
    })
  }, []);
  return (
    <>
        <Container sx={{backgroundColor:'white',color:'black'}}>
                 {products&&products.map((product,index)=>(
                  <>
                  {product._id==id?<><Productdetails item={product}/></>:<></>}
                  </>
                ))} 
                
        </Container>
        <Footer/>
    </>
  )
}

export default Details