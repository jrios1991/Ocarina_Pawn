import React, { useContext, useState } from 'react'
import ShopContext from '../context/ShopContext'
import { Link, Route, useRouteMatch } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Footer from '../components/Footer';
import Modal from './Modal';
import {Cart} from '../context/CartContext';
import './ShopList.css';

function ShopList() {
    const [myCart, setMyCart] = useContext(Cart);
    const { state } = useContext(ShopContext);
    const [isOpen, setIsOpen] = useState(false);
    const title = `Our pawn shop!`;
    const { url } = useRouteMatch();

    const itemList = state.storeItems.map(item => {
        const addToCart = () => {
            if(item.quantity > 0){
                setMyCart(currentCart => [...currentCart, item]);
                item.quantity -= 1;
            }
        };
        return (
                <div className="csscard" key={item.serialNumber}>
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 fw-normal">{item.productName}</h4>
                        </div>
                        <div className="card body">
                            <img src={item.productImage} className="card-image" />
                            <h4 className="card-title pricing-card-title">{`$${item.price}.00`}</h4>
                            <p>Quantity: {item.quantity}</p>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>
                                    <p className="card-paragraph">{item.quantity > 0 ?
                                        <button className="btn btn-outline-success button-list" onClick={addToCart}>Add to Cart</button>: 
                                        <button className="btn btn-failure button-list failure" >Sold Out!</button> }
                                    </p>
                                    <Link className="card-link" to={`${url}/${item.serialNumber}`}>
                                        <button className="btn btn-warning button-list" onClick={() => setIsOpen(true)}>{item.productName}</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
        );
    });
    return (
        <div >
            <div className="container shop-list">
            <h1>{title}</h1>
            <div>
                <h3>Products</h3>
                <ul className="cardlist">{itemList}</ul>
            </div>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <div>
                    <Route path={`${url}/:itemId`}>
                        <ProductDetails data={state.storeItems}/>
                    </Route>
                </div>
            </Modal>
            </div>

            <Footer/>
        </div>
    ); 
};


export default ShopList;
