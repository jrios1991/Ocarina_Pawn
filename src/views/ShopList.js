import React, { useContext } from 'react'
import ShopContext from '../ShopContext'
import { Link, Route, useRouteMatch } from 'react-router-dom';

function ShopList() {
    const { state } = useContext(ShopContext);
    const title = `We have ${state.storeItems.length} items available!`;
    const { url } = useRouteMatch();

    const itemList = state.storeItems.map(item => {
        return (
            <li key={item.serialNumber}>
                <img src={item.productImage}></img>
                <ul>
                    <Link to={`${url}/${item.serialNumber}`}>{item.productName}</Link>
                    <li>{item.price}</li>
                </ul>
            </li>
        );
    });
    return (
        <div>
            <h1>{title}</h1>
            <div>
                <h3>Products</h3>
                <ul>{itemList}</ul>
            </div>
            <Route path={`${url}/:itemId`}>
                <ShopContext data={ShopContext} />
            </Route>
            <Route exact path={url}>
                <p>Please select a product</p>
            </Route>
        </div>
    );
};

export default ShopList;
