import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [nav, setNav] = useState();
  return (
    <> 
    <div className='menu'>
    <a href='#home'>Home</a>
    <a href='#news'>News</a>
    <a href='#shop'>Shop</a>
    <a href='#contact'>Contact</a>
    <a href='#about'>About</a>
    <a href='#signup'>Sign Up</a>
  </div>
    </>
   
     
  );
}
export default Navbar;