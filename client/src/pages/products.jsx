import React, { useState } from 'react';
import './CSS/products.css';
import new_collections from '../more/assets/new_collections';
import ProductsDisplay from '../more/Products display/productsdisplay';

const Products = (props) => {
    const [hoveredItemId, setHoveredItemId] = useState(null);
    const [sortType, setSortType] = useState('default');
    const [genderFilter, setGenderFilter] = useState('all');

    const handleGenderFilterChange = (e) => {
        setGenderFilter(e.target.value);
    };

    const handleMouseEnter = (itemId) => {
        setHoveredItemId(itemId);
    };

    const handleMouseLeave = () => {
        setHoveredItemId(null);
    };

    const handleSortChange = (e) => {
        setSortType(e.target.value);
    };

    const sortProducts = (products, type) => {
        if (type === 'priceLowToHigh') {
            return products.slice().sort((a, b) => a.new_price - b.new_price);
        } else if (type === 'priceHighToLow') {
            return products.slice().sort((a, b) => b.new_price - a.new_price);
        } else {
            return products; 
        }
    };

    return (
        <div className='shop-products'> 
            <img src={props.banner} alt='' />
            <div className='products-indexSort'>
                <div className="products-sort">
                    Sort by
                    <select value={sortType} onChange={handleSortChange}>
                        <option value="default">Default</option>
                        <option value="priceLowToHigh">Price: Low to High</option>
                        <option value="priceHighToLow">Price: High to Low</option>
                    </select>
                </div>
                <div className="products-gender-filter">
                    Gender:
                    <select value={genderFilter} onChange={handleGenderFilterChange}>
                        <option value="all">All</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
            </div>
            <ProductsDisplay
                products={sortProducts(new_collections.filter(item => {
                    if (genderFilter === 'all') {
                        return true;
                    } else {
                        return item.gender === genderFilter;
                    }
                }), sortType)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                hoveredItemId={hoveredItemId}
            />
            <div className='products-loadmore'>
                Find More
            </div>
        </div>
    );
};

export default Products;