import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Cart} from '../context/CartContext';
import ShopContext from '../context/ShopContext';
import SearchBar from './SearchBar';
import './NavBar.css';

function NavBar() {
    const [myCart, setMyCart] = useContext(Cart);

    return (
        <div className="main-nav">
            <header>
                <p className="nav-paragraph">Ocarina Pawn Shop</p>
                <nav className="nav-navbar">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/products" className="nav-link">Our store</Link>
                    <Link to="/cart" className="nav-link">Shopping Cart{myCart.length > 0 ? ' ' + myCart.length : '' }</Link>
                    <Link to="/search" className="nav-link">Search</Link>
                </nav>
            </header>
        </div>
    )
}

export default NavBar
