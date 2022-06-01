import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import NewOrder from './NewOrder'
import OrderCard from './OrderCard'
import { baseUrl, headers, getToken } from '../../Globals'

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





export default function OrdersCard({loggedIn, orders, handleDeleteOrder, handleGetOrder, navigateOrder }) {
        const navigate = useNavigate()


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

    function handleClick(order_id){
      handleGetOrder()
    }


    function handleDelete(order_id){
      handleDeleteOrder(order_id)
    }



  return (
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
                  {orders.map((order) => (
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
  )
}
