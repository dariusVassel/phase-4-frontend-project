import React from 'react'

export default function ProductCard({product}) {
  return (
    <div>
        <h1>{product.name}</h1>
        <img src={product.image_url} alt="product image"/>
        <button>Click for more info</button>
        <input type="date"/>
    </div>
  )
}
