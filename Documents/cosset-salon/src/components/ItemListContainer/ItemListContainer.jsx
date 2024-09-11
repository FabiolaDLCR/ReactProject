import React, { useState } from 'react';
import { data } from '../data.js';
import ItemCount from '../ItemCount/ItemCount.jsx';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'; 

export const ItemListContainer = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { category } = useParams(); 
    const filteredData = category ? data.filter(product => product.category === category) : data;

///////modal
    const handleViewDetails = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div>
        
            <div className="container-items">

                {filteredData.map(product => (
                    <div className="item" key={product.id}>
                        <figure>
                            <img src={product.urlImg} alt={product.productName} />
                        </figure>
                        <div className="info-product">
                            <h2>{product.productName}</h2>
                            <p className="price">${product.price}</p>
                            <ItemCount initial={0} stock={10} />
                            <button onClick={() => handleViewDetails(product)}>
                                Ver detalles
                            </button>
                        </div>
                    </div>
                ))}
            </div>

           
            {selectedProduct && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>
                            &times;
                        </span>
                        <h2>{selectedProduct.productName}</h2>
                        <img src={selectedProduct.urlImg} alt={selectedProduct.productName} />
                        <p>{selectedProduct.description}</p>
                        <p className="price">Precio: ${selectedProduct.price}</p>
                        <ItemCount initial={0} stock={10} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;
