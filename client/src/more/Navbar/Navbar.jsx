import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import cart_icon from '../assets/cart_icon.png';


const Navbar = () => {
    const [menu, setMenu] = useState('home');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Wyszukaj: ", searchQuery);
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <p>Shop.com</p>
            </div>
            <form onSubmit={handleSearchSubmit} className="search-form">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button type="submit">Search</button>
            </form>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu('home') }}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
                    {menu === 'home' ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu('products') }}>
                    <Link style={{ textDecoration: 'none' }} to='/products'>Products</Link>
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