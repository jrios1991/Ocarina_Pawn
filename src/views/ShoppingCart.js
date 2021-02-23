import React, { useContext } from 'react';
import {Cart} from '../context/CartContext';
import Footer from '../components/Footer';
import PayPal from '../components/PayPal';
import './ShoppingCart.css'

function ShoppingCart() {
    const [myCart, setMyCart] = useContext(Cart);
    const total = myCart.reduce((add, current) => add + current.price, 0);
    return (
        <div>
            <div className="cart">
                {myCart.map(item => (
                    <div key={item.serialNumber} className="cart-list">
                        
                            <img src={item.productImage} />
                            <div className="list-details">
                            <p>{item.productName}</p>
                            <p>${item.price}.00</p>
                        </div>

                    </div>
                ))}
                <div className="cart-checkout">
                    <p>Items in cart: {myCart.length}</p>
                    <p>Total: ${total}.00</p>
                    <PayPal
                    total={total}
                    items={myCart.length}
                    />
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default ShoppingCart;
