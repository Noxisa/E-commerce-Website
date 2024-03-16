import React from 'react';
import './Banner.css';
import hand_icon from '../assets/hand_icon.png';
import arrow_icon from '../assets/arrow.png';
import hero_image from '../assets/hero_image.png';

const Banner = () => {
    return (
        <div className='banner'>
<div className="banner-left">
    <h2>New arrivals only</h2>
<div>
    <div className='banner-hand-icon'>
        <p>new</p>
        <img src={hand_icon} alt='' />
    </div>
    <p>collections</p>
    <p>for everyone</p>
</div>
<div className="banner-latest-btn">
    <div>Latest collection</div>
    <img src={arrow_icon} alt='' />
</div>
</div>
<div className="banner-right">
    <img src={hero_image} alt="" />
</div>
        </div>
    )
}

export default Banner;