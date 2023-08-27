import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useParams } from 'react-router-dom';
import './SCart.scss'
import { useSelector } from 'react-redux'


const SCart = () => {
    const [item, setItem] = useState()
    const {id} = useParams();
    console.log(id)

    const items= useSelector((state) => state)
    // console.log(items)

    const total = items.cart.reduce((a,b) => a + b.price, 0)

    const showProducts = () =>{
        const url=`https://fakestoreapi.com/products`
        axios.get(url).then((res)=>{
          console.log(res.data)
          setItem(res.data)
        }).catch((err)=>{
          console.log(err)
        })
    
    }
  
    useEffect(()=>{
      showProducts();
    }, [])
  
  return (
    <div className='scart'>
      <h1>Products in your cart</h1>
    
        <div className='cart-item' >
            <img src={items.image} alt=""/>
            <h1>{items.title}</h1>
            <div className='price'>
              1 * {items.price}
            </div>
            <DeleteOutlineIcon className='delete'/>
        </div>
      

      <div className='total'>
      <div className='cart-item' >
            {/* <img src={items.cart.image} alt='' /> */}
            
            <DeleteOutlineIcon className='delete'/>
        </div>
        <span>SubTotal</span>
        <span>${total}</span>
      </div>

      <button className='btn1'>Proceed to CheckOut</button>
      <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default SCart