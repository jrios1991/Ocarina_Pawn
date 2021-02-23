import React, { useContext } from "react";
import { Link, useParams } from 'react-router-dom';
import ShopContext from '../context/ShopContext';
import {Cart} from '../context/CartContext';
import './ProductDetails.css';

function ProductDetails() {
    const [myCart, setMyCart] = useContext(Cart);
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
                <button className="btn btn-outline-success button-list"
                onClick={() => {
                    if(item.quantity > 0){
                        setMyCart(currentCart => [...currentCart, item]);
                        item.quantity -= 1;
                    }}}>Add to cart</button>
                <br/>
            </div>
        </div>
    )
}

export default ProductDetails
