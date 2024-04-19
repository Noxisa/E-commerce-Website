import React from 'react';
import './CSS/products.css';
import dropdown_icon from '../more/assets/dropdown_icon.png';
import Item from '../more/Item/Item';
import new_collections from '../more/assets/new_collections';

const Products = (props) => {
    return (
        <div className='shop-products'> 
            <img src={props.banner} alt='' />
            <div className='products-indexSort'>
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="products-sort">
                    Sort by <img src={dropdown_icon} alt='' />
                </div>
            </div>
            <div className="products">
                {new_collections && new_collections.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item  
                            key={i} 
                            id={item.id} 
                            name={item.name}
                            image={item.image} 
                            new_price={item.new_price} 
                            old_price={item.old_price}
                        />;
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className='products-loadmore'>
                Find More
            </div>
        </div>
    );
};

export default Products;
