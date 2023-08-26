import React, { useState, useEffect } from 'react'
import CardComponent from '../CardComponent/CardComponent'
import './Featured.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Featured = () => {
    const [product, setProduct]= useState([])
    const [limit, setLimit]=useState(4)

    const data = ()=>{
        const fakeApi = (`https://fakestoreapi.com/products?limit=${limit}`)

        axios.get(fakeApi).then((res)=>{
                setProduct(res.data)
        })
   }
   

   useEffect(()=>{
    data();
   },[setLimit])
  return (
    <div className='featured'>
        <div className='top'>
            <h2>Featured Product</h2>
        </div>
        <div className='buttom'>
            {product?.map(item=>(
                <CardComponent item={item} key={item.id}/>
                
            ))}   
        </div>
        <div className='see'> 
        <Link className = 'link' to= '/products'>See More</Link>
        </div>
   
    </div>
  )
}

export default Featured