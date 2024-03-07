import React, { useState } from 'react';
import './Navbar.css';
import cart_icon from '../assets/cart_icon.png';

const Navbar = () => {
    const [menu, setMenu] = useState('home');

    return(
        <div className='navbar'>
        <div className='nav-logo'>
            <p>Shop.com</p>
        </div>
    <ul className='nav-menu'>
        <li onClick={() => {setMenu('home')}}>Home {menu ==='home'?<hr/>:<></>}</li>
        <li onClick={() => {setMenu('products')}}>Products{menu ==='products'?<hr/>:<></>}</li>
        <li onClick={() => {setMenu('about')}}>About{menu ==='about'?<hr/>:<></>}</li>
        <li onClick={() => {setMenu('contact')}}>Contact{menu ==='contact'?<hr/>:<></>}</li>
    </ul>
    <div className='nav-login-cart'>
<button>login</button>
<img src={cart_icon} alt='' />
<div className='nav-cart-count'>0</div>
    </div>
        </div>
    )
}
export default Navbar;