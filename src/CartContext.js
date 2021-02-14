import React, { useState } from 'react'

export const Cart = React.createContext();

function CartContext(props) {
    const [myCart, setMyCart] = useState([]);

    return (
        <Cart.Provider value={[myCart, setMyCart]}>
            {props.children}
        </Cart.Provider>
    )
}

export default CartContext
