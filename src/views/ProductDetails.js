import React, { useContext } from "react";
import { Link, useParams } from 'react-router-dom';
import ShopContext from '../ShopContext';
import {Cart} from '../CartContext';



function ProductDetails(props) {
    const [myCart, setMyCart] = useContext(Cart);
    const { itemId } = useParams();
    const { state } = useContext(ShopContext);
    const addToCart = () => {
        setMyCart(currentCart => [...currentCart, item]);
        console.log(item)
    };

    const item = state.storeItems.find(itemSearch => itemSearch.serialNumber === Number(itemId));
    return (
        <div>
            <div>
                <h2>{item.productName}</h2>
                <img src={item.productImage}></img>
                <p>{item.productName}</p>
                <button onClick={addToCart}>Add to Cart</button>
            </div>
            <Link to="/products">Our store</Link>
        </div>
    )
}


export default ProductDetails
