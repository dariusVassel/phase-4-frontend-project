import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from './ProductCard'

export default function ProductsList({loggedIn, products}) {
    const navigate = useNavigate()
    useEffect(()=> {
        if (!loggedIn){
            navigate("/login")
        }
        }, [loggedIn])

    const productsCards = products.map(product => <ProductCard key={product.id} product={product}/>)
  return (
    <div>
      <h1>HelloProductsCards</h1>
      <div>{productsCards}</div>
    </div>
  )
}