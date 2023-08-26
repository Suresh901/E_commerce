import {Link } from 'react-router-dom'
import React from 'react'
import './CardComponent.scss'

const CardComponent = ({item}) => {
  return (
   
   <div className='card-container'>
            <Link to={`/product/${item.id}`} className = 'link'>
            <div className='img'>
                <img src = {item.image} alt=''/>
            </div>
            <h5>{item.title}</h5>
            <h5>{item.category}</h5>
            <h5>${item.price}</h5>
            </Link>
            
    
    </div>
    
    
  )
}

export default CardComponent
