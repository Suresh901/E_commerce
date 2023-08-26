import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useParams } from 'react-router-dom';

const SCart = () => {
    const [item, setItem] = useState()
    const {id} = useParams();
    console.log(id)

    const showProduct = () =>{
        const url=`https://fakestoreapi.com/products/${id}`
        axios.get(url).then((res)=>{
          console.log(res.data)
          setItem(res.data)
        }).catch((err)=>{
          console.log(err)
        })
    
    }
  
    useEffect(()=>{
      showProduct();
    }, [])
  
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
    
        <div className='cart-item' >
            <img src={item?.image} alt=""/>
            <h1>{item?.title}</h1>
            <div className='price'>
              1 * {item?.price}
            </div>
            <DeleteOutlineIcon className='delete'/>
        </div>
      

      <div className='total'>
        <span>SubTotal</span>
        <span>$123</span>
      </div>

      <button className='btn1'>Proceed to CheckOut</button>
      <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default SCart