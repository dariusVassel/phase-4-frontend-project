import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop'


export default function Order({orders }) {
    const [order, setOrder] = useState({})
    const {id} = useParams()

    useEffect(() => {
        const ord = orders.find(ord => ord.id.toString() === id)
        setOrder(ord)
    }, [id])
  return (
    <>
      <ScrollToTop/>
      <h1>{order.PO}</h1>
    </>
  )
}
