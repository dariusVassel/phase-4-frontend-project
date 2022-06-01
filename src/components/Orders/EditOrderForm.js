import React, { useState } from 'react'

import { Paper, Container, Box, Grid } from '@mui/material'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import Button from '@mui/material/Button';

import { baseUrl, headers, getToken } from '../../Globals'
import { useNavigate } from 'react-router-dom'




export default function EditOrderForm({order, currentUser}) {
    const navigate = useNavigate()

    const [packing, setPacking] = useState("");
    const [payment, setPayment] = useState("");
    const [product, setProduct] = useState("");
    const [catchType, setCatchType] = useState("");
    const [freezeType, setFreezeType] = useState("");
    const [contact, setContact] = useState("");

    
    const [editOrder, setEditOrder] = useState({
        PO: order.PO,
        cases: order.cases,
        kilos: order.kilos,
        price_kg: order.price_kg,
        price_total: order.price_total,
        product_id: order.product_id,
        contact_id: order.contact_id,
        payment_id: order.payment_id,
        packing_id: order.packing_id,
        port_from: order.port_from,
        port_to: order.port_to,
        selected_size: order.selected_size,
        selected_freeze: order.selected_freeze,
        selected_glaze: order.selected_glaze,
        shipment_date: order.shipment_date,
        catching_method: order.catching_method,
        total_kilos: order.total_kilos,
        order_status: order.order_status,
        order_ref_number: order.order_ref_number,
        PO_date: order.PO_date,
        user_id: currentUser.id
    })

    const packings = [
        {value: 243, label: `10x1Kg`}, {value: 244, label: `6x1Kg`}, {value: 245, label: `12x1Kg`}, {value: 246, label: `6x2Kg`}, {value: 247, label: `5x4Kg`},
        {value: 248, label: `1x6Kg`}, {value: 249,label: `1x10Kg`}, {value: 250, label: `1x12Kg`}, {value: 251, label: `10x1Kg`}, {value: 252, label: `6x1Kg`},
        {value: 253, label: `12x1Kg`}
      ];
    
    const products = [
        {value: 49, label: `Cuttlefish Whole Cleaned`}, {value: 50, label: `Baby Squid`}, {value: 51, label: `Squid Whole`}, {value: 52, label: `Vannamei HOSO Cooking Quality`}, {value: 53, label: `Black Tiger`},
        {value: 54, label: `Clams`}, {value: 55,label: `Tuna`}, {value: 56, label: `Salmon`}, {value: 57, label: `Squid Whole Cleaned`}, {value: 58, label: `Cuttlefish Roe`},
        {value: 59, label: `Vannamei HOSO Retail Quality`}, {value: 60,label: `Vannamei PDTO Raw`}, {value: 61, label: `Vannamei PUD Raw`}, {value: 62, label: `Vannamei PUD Blanched`}, {value: 63, label: `Vannamei PDTO Blanched`},
        {value: 64, label: `Cut Squid`}
      ];
    
    const payments = [
        {value: 89, label: `LC`}, {value: 90, label: `Sight DP`}, {value: 91, label: `CAD`}, {value: 92, label: `Sight DA`}
      ];
    
    const catchings = [
        {value: `trawler`, label: `Trawler`}, {value: `farmed`, label: `Farmed`}, {value: `one_day_hook`, label: `One Day Hook Catch`}
      ];
    
    const freezings = [
        {value: `IQF`, label: `IQF`}, {value: `blocks`, label: `Blocks`}, {value: `jumble_blocks`, label: `Jumble Blocks`}, {value: `finger_laid`, label: `Finger Laid`}, {value: `tray_pack`, label: `Tray Pack`},
        {value: `semi_iqf`, label: `Semi IQF`}
      ];

    const contacts = [
        {value: 915, label: `Silver`}, {value: 916, label: `KR Seafoods`}, {value: 917, label: `Arsha`}, {value: 918, label: `Premier`}, {value: 919, label: `ABAD`},
        {value: 920, label: `Raunaq/JJ`}
      ];

    const handleChange = (event) => {
        setPacking(event.target.value);
        handleFormData(event)
      };

    const handleChangePayment = (event) => {
        setPayment(event.target.value);
        handleFormData(event)
      };
    
    const handleChangeProduct = (event) => {
    setProduct(event.target.value);
    handleFormData(event)
    };

    const handleChangeCatchType = (event) => {
        setCatchType(event.target.value);
        handleFormData(event)
        };

    const handleChangeFreezeType = (event) => {
        setFreezeType(event.target.value);
        handleFormData(event)
        };

    const handleContactChange = (event) => {
        setContact(event.target.value);
        handleFormData(event)
        };

    function handleFormData(e){
        const name = e.target.name
        const value = e.target.value

        console.log(name, value)
    
        setEditOrder({
            ...editOrder,
            [name] : value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        
        const strongParams = {
            order: {
                PO: editOrder.PO,
                cases: editOrder.cases,
                kilos: editOrder.kilos,
                price_kg: editOrder.price_kg,
                price_total: editOrder.price_total,
                product_id: editOrder.product_id,
                contact_id: editOrder.contact_id,
                payment_id: editOrder.payment_id,
                packing_id: editOrder.packing_id,
                port_from: editOrder.port_from,
                port_to: editOrder.port_to,
                selected_size: editOrder.selected_size,
                selected_freeze: editOrder.selected_freeze,
                selected_glaze: editOrder.selected_glaze,
                shipment_date: editOrder.shipment_date,
                catching_method: editOrder.catching_method,
                total_kilos: editOrder.total_kilos,
                order_status: editOrder.order_status,
                order_ref_number: editOrder.order_ref_number,
                PO_date: editOrder.PO_date,
                user_id: currentUser.id
            }
        }

        fetch(baseUrl + `/orders/${order.id}`,{
            method: "PATCH",
            headers: {
                ...headers,
                ...getToken()
            },
            body: JSON.stringify(strongParams)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            navigate('/orders')
        })

        setEditOrder({
            PO: null,
            cases: null,
            kilos: null,
            price_kg: null,
            price_total: null,
            product_id: null,
            contact_id: null,
            user_id: null,
            payment_id: null,
            packing_id: null,
            port_from: "",
            port_to: "",
            selected_size: "",
            selected_freeze: "",
            selected_glaze: "",
            catching_method: "",
            shipment_date: "",
            PO_date: "",
            order_ref_number: null,
            order_status: "New Order",
            total_kilos: null,
            specification: "",
            user_id: currentUser.id
        })
    }



  return (
    <div>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate autoComplete="off">
                <h3>  Order Details</h3>
                
                <TextField id="PO"  type="number" name="PO" value={editOrder.PO} onChange={handleFormData} helperText="PO#"/>
                <TextField id="contact_id" name="contact_id" value={editOrder.contact_id} select label="Seller"  onChange={handleContactChange}>
                {contacts.map((option) => (
                    <MenuItem key={option.value} value={option.value} defaultValue = "">
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
                <TextField id="PO_date" name="PO_date" value={editOrder.PO_date} label="PO Date" type="date"  sx={{ width: 220 }} InputLabelProps={{
                shrink: true,
                }} onChange={handleFormData}/>
                <TextField id="cases" helperText="Cartons" name="cases" value={editOrder.cases} type="number"  onChange={handleFormData}/>
                <TextField id="packing_id" name="packing_id" select label="Packing Type" value={editOrder.packing_id} onChange={handleChange}>
                {packings.map((option) => (
                    <MenuItem key={option.value} value={option.value} defaultValue = "">
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
                <TextField id="kilos" name="kilos" helperText="Kilos/Carton" value={editOrder.kilos} type="number" onChange={handleFormData}/>
                <TextField id="price_kg" value={editOrder.price_kg} name="price_kg" helperText="Price per kgs"  type="number" onChange={handleFormData}/>
                <TextField id="total_kilos" value={editOrder.total_kilos} name="total_kilos" helperText="Total Kilos" type="search" onChange={handleFormData}/>
                <TextField id="order_ref_number" name="order_ref_number" value={editOrder.order_ref_number}  helperText="Order Ref#" type="search" onChange={handleFormData}/>
                </Box>

                <Box component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate autoComplete="off">
                <h3>Product Details</h3>
                <TextField id="product_id" name="product_id" select label="Product Type" value={editOrder.product_id} onChange={handleChangeProduct}>
                    {products.map((option) => (
                        <MenuItem key={option.value} value={option.value} defaultValue = "">
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField id="selected_size" value={editOrder.selected_size} name="selected_size" helperText="Size" type="search" onChange={handleFormData}/>
                <TextField id="selected_freeze" name="selected_freeze" select label="Freeze" value={editOrder.selected_freeze} onChange={handleChangeFreezeType}>
                    {freezings.map((option) => (
                        <MenuItem key={option.value} value={option.value} defaultValue = "">
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                
                <TextField id="selected_glaze" value={editOrder.selected_glaze} name="selected_glaze" helperText="Glaze" type="search" onChange={handleFormData}/>
                <TextField id="catching_method" name="catching_method" select label="Catching Method" value={editOrder.catching_method} onChange={handleChangeCatchType}>
                    {catchings.map((option) => (
                        <MenuItem key={option.value} value={option.value} defaultValue = 'trawler'>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField id="specifications" value={editOrder.specifications} name="specifications" helperText="Specification" type="search" onChange={handleFormData}/>
            </Box>


            <Box component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate autoComplete="off">
                <h3>Shipping and Payment</h3>
                <TextField id="port_from" value={editOrder.port_from} name="port_from" helperText="Port (from)" type="search" onChange={handleFormData}/>
                <TextField id="port_to" value={editOrder.port_to} name="port_to" helperText="Port (to)" type="search" onChange={handleFormData}/>
                <TextField id="payment_id" name="payment_id" select label="Payment Type" value={editOrder.payment_id} onChange={handleChangePayment}>
                {payments.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
                <TextField id="shipping_date" name="shipping_date" label="Shipping Date" type="date" value={editOrder.shipment_date} defaultValue="2022-01-01" sx={{ width: 220 }} InputLabelProps={{
                    shrink: true,
                    }} onChange={handleFormData}/>
            </Box>

            <br/>
        <br/>
        <Button onClick = {handleSubmit} variant="outlined">Create Order</Button>
        <Button onClick = {()=>console.log(editOrder)} variant="outlined">Create Order</Button>
                



                
    </div>
  )
}
