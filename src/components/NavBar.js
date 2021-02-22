import React, { useContext  } from 'react';
import { Link } from 'react-router-dom';
import {Cart} from '../context/CartContext';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    const [myCart, setMyCart] = useContext(Cart);

    return (
        <div className="main-nav">
            <header>
                <p className="nav-paragraph">Ocarina Pawn Shop</p>
                <nav className="nav-navbar">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/products" className="nav-link">Our store</Link>
                    <Link to="/cart" className="nav-link"><FontAwesomeIcon icon={faShoppingCart} />{myCart.length > 0 ? ' ' + myCart.length : '' }</Link>
                    <Link to="/search" className="nav-link"><FontAwesomeIcon icon={faSearch} /></Link>
                </nav>
            </header>
        </div>
    )
}

export default NavBar
