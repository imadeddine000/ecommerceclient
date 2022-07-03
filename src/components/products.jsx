import { Table, TableContainer,Paper, TableHead, TableCell, TableBody, TableRow, IconButton } from '@mui/material'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ProductRow from './ProductRow'
const Products = () => {
  const [products, setproducts] = useState('');
  useEffect(() => {
   axios.get('https://e-commerceiek.herokuapp.com/products').then((response)=>{
      setproducts(response.data)
   })
  }, []);
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableCell sx={{fontSize:20}}>title</TableCell>
            <TableCell sx={{fontSize:20}}>price</TableCell>
            <TableCell sx={{fontSize:20}}>image</TableCell>
            <TableCell sx={{fontSize:20}} align='right'>delete</TableCell>  
          </TableHead>

          <TableBody>
            {products && products.map((product,index)=>(
              <ProductRow product={product} key={index}/>
            ))}
          </TableBody>
          
        </Table>
      </TableContainer>
    </>
  )
}

export default Products