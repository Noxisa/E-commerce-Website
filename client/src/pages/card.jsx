import React, { useState } from 'react';
import './CSS/card.css';

const Card = ({ products }) => {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {
        const newCartItem = {
            id: product.id,
            name: product.name,
            price: product.new_price,
            quantity: 1 
        };

        const existingCartItemIndex = cartItems.findIndex(item => item.id === product.id);

        if (existingCartItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingCartItemIndex].quantity += 1;
            setCartItems(updatedCartItems);
        } else {
            setCartItems(prevCartItems => [...prevCartItems, newCartItem]);
        }
    };

    const handlePayWithCard = () => {
        // Logika obsługi płatności kartą
        console.log("Paying with card...");
    };

    const handlePayWithLiczko = () => {
        // Logika obsługi płatności przez liczko
        console.log("Paying with cash...");
    };

    const handlePayWithPayPal = () => {
        // Logika obsługi płatności przez PayPal
        console.log("Paying with PayPal...");
    };

    return (
        <div className="card-container">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price} x {item.quantity}
                        </li>
                    ))}
                </ul>
            )}
            
            {products && products.length > 0 && (
                products.map((product, index) => (
                    <div key={index} className="product">
                        <h3>{product.name}</h3>
                        <p>Price: ${product.new_price}</p>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </div>
                ))
            )}

            <button onClick={handlePayWithCard}>Pay with Card</button>
            <button onClick={handlePayWithLiczko}>Pay with cash</button>
            <button onClick={handlePayWithPayPal}>Pay with PayPal</button>
            
            <div>
                <input type="text" placeholder="Enter tracking number" />
                <button>Track Shipment</button>
            </div>
        </div>
    );
}

export default Card;
