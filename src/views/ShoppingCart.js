import React, { useContext } from 'react';
import {Cart} from '../context/CartContext';
import Footer from '../components/Footer';
import './ShoppingCart.css'

function ShoppingCart() {
    const [myCart, setMyCart] = useContext(Cart);
    const total = myCart.reduce((add, current) => add + current.price, 0);
    return (
        <div>
            <div className="cart">
                {myCart.map(item => (
                    <div key={item.serialNumber} >
                        <img src={item.productImage} />
                        <p>{item.productName}</p>
                    </div>
                ))}
                <p>Items in cart: {myCart.length}</p>
                <p>Total: ${total}.00</p>
                <button className="btn btn-warning">Checkout</button>
            </div>
            <Footer />
        </div>
    )
}

export default ShoppingCart;
