import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import ContactCard from './ContactCard'


import { Paper, Container, Box, Grid } from '@mui/material'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


export default function ContactList({contacts, loggedIn,}) {
    const navigate = useNavigate()
    useEffect(()=> {
        if (!loggedIn){
            navigate("/login")
        }
        }, [loggedIn])

    const contactsCards = contacts.map(contact => <ContactCard key={contact.id} contact={contact}/>)

    const columns = [
        { id: 'Company', label: 'Company', minWidth: 170 },
        {
          id: 'Reference',
          label: 'Reference',
          minWidth: 170,
          align: 'center',
          format: (value) => value.toLocaleString('en-US'),
        },
        {
          id: 'Email',
          label: 'Email',
          minWidth: 170,
          align: 'center',
          format: (value) => value.toLocaleString('en-US'),
        },
        {
          id: 'Phone',
          label: 'Phone',
          minWidth: 170,
          align: 'center',
          format: (value) => value.toLocaleString('en-US'),
        },
        {
          id: 'Location',
          label: 'Location',
          minWidth: 170,
          align: 'center',
          format: (value) => value.toFixed(2),
        },
      ];
    return (
        <Container>
            <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
        <Paper sx={{ width: '100%', overflow: 'hidden' }} elevation = {4}  padding = {4}>
            <div>
              
              
              <TableContainer sx={{ maxHeight: 1000 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow >
                      {columns.map((column) => (
                      <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>{column.label}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {contacts.map((contact) => (
                    <TableRow key={contact.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} hover>
                      <TableCell component="th" scope="row">{contact.company}</TableCell>
                      <TableCell align="center">{contact.first_name} {contact.last_name}</TableCell>
                      <TableCell align="center">{contact.email}</TableCell>
                      <TableCell align="center">{contact.phone}</TableCell>
                      <TableCell align="center">{contact.country}</TableCell>
                    </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              {/* {ordersCards} */}
            </div>
          
        </Paper>
      </Container>
    )
}


