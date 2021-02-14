import React, { useState, useContext } from 'react';
import ShopContext from '../ShopContext';
import {Cart} from '../CartContext';

function ShoppingCart() {
    const { state } = useContext(ShopContext);
    const [myCart, setMyCart] = useContext(Cart);
    const total = myCart.reduce((add, current) => add + current.price, 0)
    return (
        <div>
            <p>Items in cart: {myCart.length}</p>
            <p>Total: ${total}.00</p>
        </div>
    )
}

export default ShoppingCart;
