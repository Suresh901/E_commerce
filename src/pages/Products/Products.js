import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Products.scss'

import CardComponent from '../../components/CardComponent/CardComponent'

const Products = () => {
    const [product, setProduct] = useState([])

   const data = ()=>{
        const fakeApi = ('https://fakestoreapi.com/products')

        axios.get(fakeApi).then((res)=>{
                console.log(res.data)
                setProduct(res.data)
        })
   }
   
   useEffect(()=>{
    data();
   }, [])

  return (
    <div className='products'>
        <div className='products-top'>
        <h1>Products</h1>
        </div>
     
        <div className='products-buttom'>
            {product?.map(item=>(
                <CardComponent item={item} key={item.id}/>
            )
                )}
        </div>
    </div>
  )
}

export default Products

