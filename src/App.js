import React, { useContext, useReducer } from 'react';
import ShopContext from './ShopContext';
import ShopReducer from './ShopReducer';
import ShopList from './views/ShopList';
import Navbar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';

function App(){
  const initialState = useContext(ShopContext);
  const [state, dispatch] = useReducer(ShopReducer, initialState);

  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      <Navbar/>
      <h1>Welcome to Ocarina Pawn Shop!</h1>
      <Switch>
        <Route path="/products">
          <ShopList/>
        </Route>
      </Switch>
    </ShopContext.Provider>
  )
};

export default App;
