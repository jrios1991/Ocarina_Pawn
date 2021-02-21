import React, { useState, useContext } from 'react';
import ShopContext from '../context/ShopContext';
import {Cart} from '../context/CartContext';

function ShoppingCart() {
    const { state } = useContext(ShopContext);
    const [myCart, setMyCart] = useContext(Cart);
    const total = myCart.reduce((add, current) => add + current.price, 0);
    return (
        <div>
            <p>Items in cart: {myCart.length}</p>
            <p>Total: ${total}.00</p>
            {myCart.map(item => (
                <div key={item.serialNumber}>
                    <p>{item.productName}</p>
                </div>
            ))}
        </div>
    )
}

export default ShoppingCart;
