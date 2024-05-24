import React, { useState } from 'react';
import './productsdisplay.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const ProductsDisplay = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setModalIsOpen(true);
    };
    const addToCart = (product) => {
        const quantity = parseInt(document.getElementById("quantityInput").value);
        console.log(`Dodano ${quantity} sztuk ${product.name} do koszyka.`);
        closeModal();
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="products-display">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="product-item"
                    onClick={() => handleProductClick(product)}
                >
                    <Link to={`/products/${product.id}`}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>New Price: {product.new_price}</p>
                        <p>Old Price: {product.old_price}</p>
                    </Link>
                </div>
            ))}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Product Modal"
            >
                {selectedProduct && (
                    <div className="modal-content">
                        <img src={selectedProduct.image} alt={selectedProduct.name} />
                        <h2>{selectedProduct.name}</h2>
                        <p>New Price: {selectedProduct.new_price}</p>
                        <p>Old Price: {selectedProduct.old_price}</p>
                        {/* Dodaj opis produktu */}
<p>{selectedProduct.description}</p>

{/* Dodaj pole do wprowadzania ilości produktu */}
<input type="number" min="1" defaultValue="1" />

{/* Dodaj przycisk do dodawania do koszyka */}
<button onClick={() => addToCart(selectedProduct)}>Add to Cart</button>
                        <button onClick={closeModal}>Close Modal</button>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default ProductsDisplay;
