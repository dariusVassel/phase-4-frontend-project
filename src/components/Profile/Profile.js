import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Paper, Container, Box, Grid } from '@mui/material'

import Typography from '@mui/material/Typography';


import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import TableContainer from '@mui/material/TableContainer';



function Profile({currentUser, orders}) {

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          backgroundColor: '#44b700',
          color: '#44b700',
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
          },
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
          },
        },
      }));


      const ordersCards = orders.map(order => <p key={order.id}>{order.total_kilos} kgs of {order.product.name} at ${order.price_kg} per kg</p>)
    
  return (
    <>
        <br/>
        <br/>
        
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
            <Grid item xs={3}>
                <Typography variant="h5">Hello there, {currentUser.username}</Typography>
                <Typography>Here is some information we gathered about your store</Typography>

                <Paper sx={{ width: '100%', overflow: 'hidden' }} elevation = {4}  padding = {4}>
                    <Box sx={{ p: 2 }}>
                        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '10vh' }}>
                            <Grid item xs={3}>
                                <Stack direction="row" spacing={2}>
                                    <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                                        <Avatar sx={{ width: 60, height: 60 }}>{currentUser.first_name[0]}{currentUser.last_name[0]}</Avatar>
                                    </StyledBadge>
                                </Stack>
                                <div>{currentUser.first_name} {currentUser.last_name}</div>
                                <div>{currentUser.bio}</div>
                                <div>{currentUser.country}</div>
                                <button onClick = {()=>console.log(orders)}>Click</button>
                            </Grid>   
                        </Grid> 
                    </Box>
                </Paper>
                <br/>
                <br/>
                <Paper sx={{ width: '100%', overflow: 'hidden' }} elevation = {4}  padding = {4}>
                    <Box sx={{ p: 2 }}>
                    <Typography>Inventory bought through withthetide:</Typography>
                    <div>{ordersCards}</div>
                    </Box>
                </Paper>
            </Grid>   
        </Grid> 
    </>
  )
}

export default Profile