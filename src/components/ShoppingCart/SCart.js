import React, { useDebugValue } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './SCart.scss'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../Store/Slices/CartSlice';
import { resetCart } from '../../Store/Slices/CartSlice';


const SCart = () => {
    
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()

    const totalPrice = ()=>{
      let total = 0 ;
        products.forEach((item) => (total += item.quantity * item.price))
        // return total.toFixed(2);
        console.log(total)
        return total
    }
  
  return (
    <div className='scart'>
      <h1>Products in your cart</h1>   
        {
          products.map(item=> (
            <div className='cart-item' key= {item.id} >
                    <img src= {item.image} alt=""/>
                    <h1>{item.title}</h1>
                    <div className='price'>
                      {item.quantity} * {item.price}
                    </div>
                    <DeleteOutlineIcon className='delete' onClick={()=>dispatch(removeItem(item.id))}/>
                </div> 
          ))
        }
              <div className='total'>
              
                <span>SubTotal</span>
                
                <span>${totalPrice()}</span>
              </div>

              <button className='btn1'>Proceed to CheckOut</button>
              <span className='reset' onClick={()=>dispatch(resetCart())}>Reset Cart</span>
            </div>
          )
}

export default SCart