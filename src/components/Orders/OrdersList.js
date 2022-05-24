import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import OrderCard from './OrderCard'

export default function OrdersList({loggedIn, orders}) {
    const navigate = useNavigate()
    useEffect(()=> {
        if (!loggedIn){
            navigate("/login")
        }
        }, [loggedIn])
    const ordersCards = orders.map(order => <OrderCard key={order.id} order={order}/>)
  return (
    <div>OrdersList
        {ordersCards}
    </div>
  )
}
