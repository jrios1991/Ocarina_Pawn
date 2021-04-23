import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import ShopContext from '../context/ShopContext';
import {Cart} from '../context/CartContext';
import './ProductDetails.css';
import axios from 'axios';


function ProductDetails() {
    const [myCart, setMyCart] = useContext(Cart);
    const [products, setProducts] = useState([])
    const { itemId } = useParams();
    const { state } = useContext(ShopContext);
    const MY_PRODUCTS = "http://localhost:8080/products/" + itemId;
    useEffect(() => {
        axios.get(MY_PRODUCTS)
        .then(response => {
            console.log(response.data);
            setProducts(response.data)
        });
    }, []);
    return (
        <div className="details">
            <div>
                <h2>{products.productName}</h2>
                <img src={products.productImage}></img>
                <ul className="details-ul">
                    <li>Serial Number: {products.serialNumber}</li>
                    <li>Manufacturer: {products.manufacturer}</li>
                    <li>Category: {products.category}</li>
                    <li>Quantity: {products.quantity}</li>
                </ul>
                <p>${products.price}.00</p>
                <button className="btn btn-outline-success button-list"
                onClick={() => {
                    if(products.quantity > 0){
                        setMyCart(currentCart => [...currentCart, products]);
                        products.quantity -= 1;
                    }}}>Add to cart</button>
                <br/>
            </div>
        </div>
    )
}

export default ProductDetails
