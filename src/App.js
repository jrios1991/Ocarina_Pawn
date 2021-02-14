import React, { useContext, useReducer, useState } from 'react';
import ShopContext from './ShopContext';
import ShopReducer from './ShopReducer';
import ShopList from './views/ShopList';
import Navbar from './components/NavBar';
import ProductDetails from './views/ProductDetails';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ShoppingCart from './views/ShoppingCart';
import {Cart} from './CartContext';

function App(){
  const { url } = useRouteMatch();
  const initialState = useContext(ShopContext);
  const [state, dispatch] = useReducer(ShopReducer, initialState);
  const [myCart, setMyCart] = useState([]);

  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      <Cart.Provider value={[myCart, setMyCart]}>
        <Navbar/>
        <h1>Welcome to Ocarina Pawn Shop!</h1>
        <Switch>
          <Route path="/products">
            <ShopList/>
          </Route>
          <Route path={`${url}/:itemId`}>
            <ProductDetails data={initialState}/>
          </Route>
          <Route path="/cart">
            <ShoppingCart/>
          </Route>
        </Switch>
      </Cart.Provider>
    </ShopContext.Provider>
  )
};

export default App;
