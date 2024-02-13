import React, { useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
    const [scrolled,setScrolled] = React.useState(false);
const handleScroll = () =>{
    const offset = Window.scrollY;
    if(offset > 200){
        setScrolled(true);
    }
    else{
        setScrolled(false);
    }
}

useEffect(() =>{
    window.addEventListener('scroll',handleScroll)
})
let navbarClasses = ['navbar'];
if(scrolled){
    navbarClasses.push('scrolled');
}
    return (
        <header className={navbarClasses.join(" ")}>

      
        <nav className="navigation">
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
        </nav>

    </header>
    );
  };
  
  export default Navbar;