import React, { useContext } from 'react';
import './CSS/products.css';
import { ShopContext } from '../context/ShopContext';

const Products = () => {
    const {all_product} = useContext(ShopContext);
    return (
        <div className='shop-products'> 

        </div>
    )
}

export default Products;