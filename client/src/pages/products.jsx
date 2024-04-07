import React, { useContext, propTypes, props} from 'react';
import './CSS/products.css';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../more/assets/dropdown_icon.png';
import Item from '../more/Item/Item';

const Products = () => {
    const {all_product} = useContext(ShopContext);
    return (
        <div className='shop-products'> 
        <img src={propTypes.banner} alt='' />
        <div className='products-indexSort'>
            <p>
                <span>Showing 1-12</span> out of 36 products
            </p>
            <div className="products-sort">
                Sort by <img src={dropdown_icon} alt='' />
            </div>
        </div>
        <div className="products">
            {all_product.map((item, i) => {
                if(props.category === item.category){
                    return <Item  
                    key={i} 
                    id={item.id} 
                    name={item.name}
                    image={item.image} 
                    new_price={item.new_price} 
                    old_price={item.old_price}
                    />
                }
                else{
                    return null;
                }
            })}
        </div>
        <div className='products-loadmore'>
            Find More
        </div>
        </div>
    )
}

export default Products;