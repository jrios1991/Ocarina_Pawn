import React, { useContext, useState } from 'react'
import ShopContext from '../ShopContext'
import { Link, Route, useRouteMatch } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import {Cart} from '../CartContext';

function ShopList() {
    const [myCart, setMyCart] = useContext(Cart);
    const { state } = useContext(ShopContext);
    const title = `We have ${state.storeItems.length} items available!`;
    const { url } = useRouteMatch();
    const itemList = state.storeItems.map(item => {
        const addToCart = () => {
            setMyCart(currentCart => [...currentCart, item]);
            console.log(item)
        }
        return (
            <li key={item.serialNumber}>
                <img src={item.productImage}></img>
                <ul>
                    <Link to={`${url}/${item.serialNumber}`}>{item.productName}</Link>
                    <li>{`$${item.price}.00`}</li>
                </ul>
                <button onClick={addToCart}>Add to Cart</button>
            </li>
        );
    });
    return (
        <div>
            <h1>{title}</h1>
            <div>
                <h3>Products</h3>
                <ul>{itemList}</ul>
            </div>
            <Route path={`${url}/:itemId`}>
                    <ProductDetails data={state}/>
            </Route>
            <Route exact path={url}>
                <p>Please select a product</p>
            </Route>
        </div>
    ); 
};


export default ShopList;
