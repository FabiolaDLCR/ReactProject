import React from 'react';
import { data } from '../data.js';

export const ItemListContainer = () => {
    return(
        <div className="container-items"> {
            data.map (product => (
                <div className = "item" key={product.id}>
                    <figure>
					<img src={product.urlImg} alt={product.productName}/>
				</figure>
				<div className="info-product">
					<h2>{product.productName}</h2>
					<p className="price">${product.price}</p>
					<button className="btn-add-cart">Añadir al carrito</button>
				</div>
			</div>
            ))}
        </div>
    );
};

export default ItemListContainer