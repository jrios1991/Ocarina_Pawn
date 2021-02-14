import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {Cart} from '../CartContext';

function NavBar() {
    const [myCart, setMyCart] = useContext(Cart);
    return (
        <div>
            <nav>
                <p>Ocarina Pawn Shop</p>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Our store</Link></li>
                </ul>
                <ul>
                    <li><Link to="/cart">Shopping Cart{myCart.length > 0 ? ' ' + myCart.length : '' }</Link></li>
                </ul>
            </nav>

        </div>
    )
}

export default NavBar
