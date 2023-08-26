import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SCart from '../ShoppingCart/SCart'


const Navbar = () => {
    const [cart, setCart] = useState(false)

  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='left'>
                <div className='item'>
                    <Link to ='/'className='link'>Home</Link>
                </div>
                <div className='item'>
                    <Link to ='/' className='link'>About</Link>
                </div>
                <div className='item'>
                    <Link to ='/' className='link'>Services</Link>
                </div>
            </div>

            <div className='center'>
            <div className='item'>
                    <Link to ='/' className='link' >E -STORE</Link>
                </div>
            </div>

            <div className='right'>
                <div className='icons'>
                 <SearchIcon/> 
                  <FavoriteBorderIcon/>
                    <div className='cart' onClick={()=>{setCart(!cart)}}>
                        <ShoppingCartIcon/> 
                        <span>0</span>
                    </div> 
                </div>
            </div>
        </div>

        {cart && <SCart/>}
    </div>
  )
}

export default Navbar