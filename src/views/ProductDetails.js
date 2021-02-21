import React, { useContext } from "react";
import { Link, useParams, useRouteMatch, Route } from 'react-router-dom';
import ShopContext from '../context/ShopContext';
import {Cart} from '../context/CartContext';
import './ProductDetails.css';



function ProductDetails(props) {
    const [myCart, setMyCart] = useContext(Cart);
    const { itemId } = useParams();
    const { state } = useContext(ShopContext);
    const { url } = useRouteMatch();
    const addToCart = () => {
        setMyCart(currentCart => [...currentCart, item]);
        console.log(item)
    };

    const item = state.storeItems.find(itemSearch => itemSearch.serialNumber === Number(itemId));
    return (
        <div className="details">
            <div>
                <h2>{item.productName}</h2>
                <img src={item.productImage}></img>
                <ul>
                    <li>Serial Number: {item.serialNumber}</li>
                    <li>Manufacturer: {item.manufacturer}</li>
                    <li>Category: {item.category}</li>
                    <li>Quantity: {item.quantity}</li>
                </ul>
                <p>${item.price}.00</p>
            </div>
            <Link to="/products">Our store</Link>
        </div>
    )
}


export default ProductDetails
