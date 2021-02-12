import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <nav>
                <p>Ocarina Pawn Shop</p>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Our store</Link></li>
                </ul>
                <ul>
                    <li><Link to="/cart">Shopping Cart</Link></li>
                </ul>
            </nav>

        </div>
    )
}

export default NavBar
