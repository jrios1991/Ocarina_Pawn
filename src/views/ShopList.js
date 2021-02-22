import React, { useContext, useState } from 'react'
import ShopContext from '../context/ShopContext'
import { Link, Route, useRouteMatch, withRouter } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import {Cart} from '../context/CartContext';
import './ShopList.css';

function ShopList() {
    const [myCart, setMyCart] = useContext(Cart);
    const { state } = useContext(ShopContext);
    const title = `We have ${state.storeItems.length} items available!`;
    const { url } = useRouteMatch();
    const itemList = state.storeItems.map(item => {
        const addToCart = () => {
            if(item.quantity > 0){
                setMyCart(currentCart => [...currentCart, item]);
                item.quantity -= 1;
            }
        };
        return (
                <div className="col csscard" key={item.serialNumber}>
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 fw-normal">{item.productName}</h4>
                        </div>
                        <div className="card body">
                            <img src={item.productImage} className="card-image" />
                            <h4 className="card-title pricing-card-title">{`$${item.price}.00`}</h4>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>
                                    <p className="card-paragraph">{item.quantity > 0 ?
                                        <button className="btn btn-outline-success button-list" onClick={addToCart}>Add to Cart</button>: 
                                        'Sold Out!' }
                                    </p>
                                    <Link className="card-link" to={`${url}/${item.serialNumber}`}>
                                        <button className="btn btn-primary button-list">{item.productName}</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        );
    });
    return (
        <div className="container">
            <h1>{title}</h1>
            <div>
                <h3>Products</h3>
                <ul className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 list-unstyled mt-3 mb-4 cardlist">{itemList}</ul>
            </div>
            <Route path={`${url}/:itemId`}>
                <ProductDetails data={state.storeItems}/>
            </Route>
            <Route exact path={url}>
                <p>Please select a product</p>
            </Route>
        </div>
    ); 
};


export default (withRouter(ShopList));
