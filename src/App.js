import React, { useContext, useReducer, useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ShopContext from './context/ShopContext';
import ShopReducer from './context/ShopReducer';
import ShopList from './views/ShopList';
import Navbar from './components/NavBar';
import LandingPage from './views/LandingPage'
import SearchBar from './components/SearchBar';
import ProductDetails from './views/ProductDetails';
import ShoppingCart from './views/ShoppingCart';
import {Cart} from './context/CartContext';
import './App.css';

function App(){
  const { url } = useRouteMatch();
  const initialState = useContext(ShopContext);
  const [state, dispatch] = useReducer(ShopReducer, initialState);
  const [myCart, setMyCart] = useState([]);
  return (
    <div>
      <ShopContext.Provider value={{ state, dispatch }}>
        <Cart.Provider value={[myCart, setMyCart]}>
          <Navbar/>
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
            <Route path="/search">
              <SearchBar />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </Cart.Provider>
      </ShopContext.Provider>
    </div>
  )
};

export default App;
