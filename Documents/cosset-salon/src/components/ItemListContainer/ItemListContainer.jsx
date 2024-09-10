import React from 'react';
import { data } from '../data.js';
import ItemCount from '../ItemCount/ItemCount.jsx';

export const ItemListContainer = () => {
    return(
        <div>
            <h2>Todos nuestros productos</h2>
        <div className="container-items"> {
            data.map (product => (
                <div className = "item" key={product.id}>
                    <figure>
					<img src={product.urlImg} alt={product.productName}/>
				</figure>
				<div className="info-product">
					<h2>{product.productName}</h2>
					<p className="price">${product.price}</p>
					<ItemCount />
				</div>
			</div>
            ))}
        </div>
        </div>
    );
};

export default ItemListContainer