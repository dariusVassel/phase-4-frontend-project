import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import NewOrder from './NewOrder'
import OrderCard from './OrderCard'
import { baseUrl, headers, getToken } from '../../Globals'
import Stack from '@mui/material/Stack';

import { Paper, Container, Box, Grid } from '@mui/material'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import Button from '@mui/material/Button';

import {Link} from 'react-router-dom'

import TextField from '@mui/material/TextField';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Footer from '../../Footer/Footer'










export default function OrdersList({loggedIn, orders, handleDeleteOrder, handleGetOrder, navigateOrder, handleSearchOrder }) {
  const [status, setStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('')  
  const navigate = useNavigate()
    useEffect(()=> {
        if (!loggedIn){
            navigate("/login")
        }
        }, [loggedIn])

        const columns = [
          { id: 'PO', label: 'PO#', minWidth: 170 },
          {
            id: 'status',
            label: 'Status',
            minWidth: 130,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
          },
          {
            id: 'product',
            label: 'Product',
            minWidth: 130,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
          },
          {
            id: 'cartons',
            label: 'Cartons',
            minWidth: 130,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
          },
          {
            id: 'seller',
            label: 'Seller',
            minWidth: 130,
            align: 'center',
            format: (value) => value.toFixed(2),
          },
        ];
    const ordersCards = orders.filter((order) => {
      if (searchTerm == ""){
        return order
      } else if (order.product.name.toLowerCase().includes(searchTerm.toLowerCase())){
        return order
      }
    }).map(order => <OrderCard key={order.id} order={order} handleDeleteOrder={handleDeleteOrder} handleGetOrder={handleGetOrder}/>)
    
    function handleClick(order_id){
      fetch(baseUrl + `/orders/${order_id}`, {
        headers: {
          ...headers,
          ...getToken()
        }
      })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        handleGetOrder(data)    
    })
    }


    function handleDelete(order_id){
      handleDeleteOrder(order_id)
    }

    const handleChange = (event) => {
      setStatus(event.target.value);
    };

    function handleSearch(e){
      handleSearchOrder(e)
    }



  return (
    <>
    <Container>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Button onClick = {()=> navigate(`/new_order`)}>New Order</Button>
      <br/>
      <br/>
           
            
      <Paper sx={{ width: '100%', overflow: 'hidden' }} elevation = {4}  padding = {4}>
            <TableContainer sx={{ maxHeight: 1000 }}>
              <Stack>
                <TextField id="filled-search" label="Search Product" type="search" variant="filled" colSpan={2} onChange={event => setSearchTerm(event.target.value)}/>
                
                <br/>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl style={{m: 1,minWidth: 120}}>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={status} label="Status" onChange={handleChange}>
                      <MenuItem value={"All"}>All</MenuItem>
                      <MenuItem value={"New Order"}>New Order</MenuItem>
                      <MenuItem value={"Complete"}>Complete</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Stack>
              <Table stickyHeader aria-label="sticky table">
              
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={2}>
                     <b>Orders</b> 
                    </TableCell>
                    
                  </TableRow>
                  
                  
                  <TableRow>
                    {columns.map((column) => (
                    <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>{column.label}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.filter((order) => {
                    if (searchTerm == ""){
                      return order
                    } else if (order.product.name.toLowerCase().includes(searchTerm.toLowerCase())){
                      return order
                    }
                  })
                  .map((order) => (
                  <TableRow key={order.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} hover>
                    <TableCell component="th" scope="row" >{order.PO}</TableCell>
                    <TableCell align="center" >{order.order_status}</TableCell>
                    <TableCell align="center" >{order.product.name}</TableCell>
                    <TableCell align="center" >{order.cases}</TableCell>
                    <TableCell align="center" >{order.contact.company}</TableCell>
                    
                    <TableCell align="center">
                      {/* <Button onClick = {()=> handleClick(order.id)} variant="outlined" color="error">View2</Button> */}
                      <Link  onClick = {()=> handleClick(order.id)} variant="outlined" style={{paddingLeft: 13, textDecoration: 'none'}} to={`/orders/${order.id}`}><Button variant="outlined" >View</Button></Link>
                      
                    
                    </TableCell>
                    <TableCell align="center" onClick = {()=> handleDelete(order.id)}><Button onClick = {()=> console.log(orders)} variant="outlined" color="error">Delete</Button></TableCell>
                  </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
      </Paper>
    </Container>
    <br/>
      <br/>
      <br/>
      
    <Footer/>
    </>
  )
}

