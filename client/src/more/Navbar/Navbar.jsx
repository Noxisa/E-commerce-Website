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
        <li onClick={() => {setMenu('home')}}><link style={{textDecoration: 'none'}} to='/'>Home </link>{menu ==='home'?<hr/>:<></>}</li>
        <li onClick={() => {setMenu('products')}}><link style={{textDecoration: 'none'}} to='/products'>Products</link>{menu ==='products'?<hr/>:<></>}</li>
        <li onClick={() => {setMenu('about')}}><link style={{textDecoration: 'none'}} to='/about'>About</link>{menu ==='about'?<hr/>:<></>}</li>
        <li onClick={() => {setMenu('contact')}}><link style={{textDecoration: 'none'}} to='/contact'>Contact</link>{menu ==='contact'?<hr/>:<></>}</li>
    </ul>
    <div className='nav-login-cart'>
    <link to='/signup'><button>login</button></link>
    <link to='/card'><img src={cart_icon} alt='' /></link>
<div className='nav-cart-count'>0</div>
    </div>
        </div>
    )
}
export default Navbar;