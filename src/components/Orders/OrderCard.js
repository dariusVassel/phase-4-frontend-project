import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrderCard({order}) {
    const navigate = useNavigate()
    
  return (
    <div>
        <h1>{order.PO}</h1>
        <img src={order.product_id} alt="product image"/>
        <button onClick = {()=> navigate(`/orders/${order.id}`)}>Click for more info</button>
        <input type="date"/>
    </div>
  )
}
