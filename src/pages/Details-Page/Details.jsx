import React from 'react'
import './Details.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
const Details = () => {

    const {id} =useParams()
    const dispatch= useDispatch()
    const {product}= useSelector (state => state.pruducts)

    useEffect(()=>{
        dispatch(getDetailProduct(id)) 
    },[dispatch,id])

    // console.log(productDetail, prog)
  return (
    <div>
      <h2>{product.productName}</h2>
      <img src={product.productImg} alt={product.productName} />
      <p>Price: ${product.productPrice}</p>
      {/* Other product details */}
    </div>
  )
}

export default Details