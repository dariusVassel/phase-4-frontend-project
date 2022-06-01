import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop'
import { useNavigate } from 'react-router-dom'

import { Paper, Container, Box, Grid, Switch } from '@mui/material'
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import Image from '../../svgs/download.png'
import EditOrderForm from './EditOrderForm'



export default function Order({orders, handleDeleteOrder, order, loggedIn, currentUser }) {
    const [editOrder, setEditOrder] = useState(false)

    function handleClick(){
      console.log("before", editOrder)
      setEditOrder(!editOrder)
      console.log("after", editOrder)
  }

    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=> {
        if (!loggedIn){
            navigate("/login")
        }
        }, [loggedIn])
    
    // if (!order){
    //   const ord = orders.find(ord => ord.id.toString() === id);
    //   setOrd(ord)  
    // } else {
    //   console.log('ord')
    // }

    function handleDelete(id){
      handleDeleteOrder(id)
    }

  return (
    <>

      <ScrollToTop/>    
      <Container>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Grid item xs={4}>

        
              



          <Paper elevation = {4}  padding = {4}>
            <Box padding = {2}>
            <CardHeader avatar={<Avatar sx={{ bgcolor: red[500], fontSize: 12}} aria-label="recipe">#{order.PO}</Avatar>} action={<IconButton aria-label="settings"> <MoreVertIcon />
                </IconButton>} title={order.product.name} subheader={order.shipment_date}/>
                <Button onClick = {handleClick}>Edit Order</Button>
                <Switch checked={editOrder} onChange={() => setEditOrder(!editOrder)}/>

            {!editOrder ? (
              <>
                
              <Typography variant="h6" gutterBottom component="div"><b>Summary</b></Typography>
              <Typography variant="subtitle1" gutterBottom component="div">PO#: {order.PO}</Typography>
              <Typography variant="subtitle1" gutterBottom component="div">Order Ref#: {order.order_ref_number}</Typography>
              <Typography variant="subtitle1" gutterBottom component="div">{order.total_kilos/1000} tonnes of {order.product.name} at ${order.total_kilos * order.price_kg}</Typography>
              <Typography variant="subtitle1" gutterBottom component="div">Product Specfications:{order.product.specification}</Typography>
              <br/>
              <br/>
              <Typography variant="h6" gutterBottom component="div"><b>Product Specs</b></Typography>
              <Typography variant="subtitle1" gutterBottom component="div">Product:{order.product.name}</Typography>
              <Typography variant="subtitle1" gutterBottom component="div">Product Specfications:{order.product.specification}</Typography>
              <Typography variant="subtitle1" gutterBottom component="div">Size: {order.selected_size}</Typography>
              <Typography variant="subtitle1" gutterBottom component="div">Freeze: {order.selected_freeze}</Typography>
              <Typography variant="subtitle1" gutterBottom component="div">Glaze: {order.selected_glaze}</Typography>
              <Typography variant="subtitle1" gutterBottom component="div">Catch Type: {order.catching_method}</Typography>
              <br/>
              <br/>
              <Typography variant="h6" gutterBottom component="div"><b>Order Details</b></Typography>
              <Typography variant="subtitle1" gutterBottom component="div">Seller: {order.contact.company}</Typography>
              <Typography variant="subtitle1" gutterBottom component="div">From: {order.port_from} To: {order.port_to}</Typography>
              <Typography variant="subtitle1" gutterBottom component="div">Shipment Date: {order.shipment_date}</Typography>

              <Typography variant="subtitle1" gutterBottom component="div">Price per kg: ${order.price_kg}</Typography>
              <Typography variant="subtitle1" gutterBottom component="div">Kgs per Carton:{order.kilos}</Typography>
              <Typography variant="subtitle1" gutterBottom component="div">Total Kilos:{order.total_kilos}</Typography>
              </>
              ) : (
                <>
                <EditOrderForm order={order} currentUser={currentUser}/>
                </>
              )}
            </Box>
          </Paper>
          
        </Grid>
      </Container>
    </>
  )
}
