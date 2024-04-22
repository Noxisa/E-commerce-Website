import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import cart_icon from '../assets/cart_icon.png';


const Navbar = () => {
    const [menu, setMenu] = useState('home');
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <p>Shop.com</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu('home') }}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
                    {menu === 'home' ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu('products') }}>
                    <div className='dropdown-wrapper'>
                        <div className='dropdown-header' onClick={toggleDropdown}>
                            Products
                            <span className={`dropdown-icon ${showDropdown ? 'open' : ''}`}>&#9662;</span>
                        </div>
                        {showDropdown && (
                            <div className='dropdown-content'>
                                <Link to='/products/mens'>Men's</Link>
                                <Link to='/products/womens'>Women's</Link>
                            </div>
                        )}
                    </div>
                    {menu === 'products' ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu('about') }}>
                    <Link style={{ textDecoration: 'none' }} to='/about'>About</Link>
                    {menu === 'about' ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu('contact') }}>
                    <Link style={{ textDecoration: 'none' }} to='/contact'>Contact</Link>
                    {menu === 'contact' ? <hr /> : <></>}
                </li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/signup'><button>login</button></Link>
                <Link to='/card'><img src={cart_icon} alt='' /></Link>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    );
}

export default Navbar;