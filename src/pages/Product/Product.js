import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Store/Slices/CartSlice'

const Product = () => {

  const [item, setItem] = useState()
  const [quantity, setQuantity] = useState(1)

  const {id} = useParams();
  // console.log(id)

  const dispatch = useDispatch();

  const showProduct = () =>{
      const url=`https://fakestoreapi.com/products/${id}`
      axios.get(url).then((res)=>{
        // console.log(res.data)
        setItem(res.data)
      }).catch((err)=>{
        console.log(err)
      })
  
  }

  useEffect(()=>{
    showProduct();
  }, []);

  
  return (
    <div className='product'>
      <div className='product-left'>
        <img src={item?.image} alt=''/>
      </div>

      <div className='product-right'>
              <h5>Title:</h5>
              <h3>{item?.title}</h3>
              <h5>Description: </h5>
              <h3>{item?.description}</h3> 
              <h5>Price: $ {item?.price}</h5>

              <div className='counter'> 
              <button className='btn' onClick={(e)=>{setQuantity(num=>num === 1 ? 1 : num-1)}}> - </button>
              <span> {quantity} </span>
              <button className='btn' onClick={(e)=>{setQuantity(num=>num+1)}}> + </button>
              </div>

              <button className='add' onClick={(e)=>{dispatch(addToCart({
                id: item?.id,
                title: item?.title,
                image: item?.image,
                price: item?.price,
                quantity
              }))}}>
              
              <AddShoppingCartIcon/> Add To Cart
              </button>
      </div>
    </div>
  )
}

export default Product