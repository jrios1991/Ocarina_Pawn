import React, { useContext } from "react";
import { Link, useParams } from 'react-router-dom';
import ShopContext from '../context/ShopContext';
import './ProductDetails.css';



function ProductDetails() {
    const { itemId } = useParams();
    const { state } = useContext(ShopContext);
    const item = state.storeItems.find(itemSearch => itemSearch.serialNumber === Number(itemId));
    return (
        <div className="details">
            <div>
                <h2>{item.productName}</h2>
                <img src={item.productImage}></img>
                <ul className="details-ul">
                    <li>Serial Number: {item.serialNumber}</li>
                    <li>Manufacturer: {item.manufacturer}</li>
                    <li>Category: {item.category}</li>
                    <li>Quantity: {item.quantity}</li>
                </ul>
                <p>${item.price}.00</p>
            </div>
            <Link to="/products">
                <button type="button" className="btn btn-outline-primary">Our products</button>
            </Link>
        </div>
    )
}


export default ProductDetails
