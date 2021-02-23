import React, { useState, useContext } from 'react';
import {Link, useRouteMatch, Route} from 'react-router-dom';
import ShopContext from '../context/ShopContext';
import ProductDetails from '../views/ProductDetails';
import Footer from '../components/Footer';
import Modal from '../views/Modal';
import './SearchBar.css';


function SearchBar() {
    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const { url } = useRouteMatch();
    const { state } = useContext(ShopContext);
    const handleChange = event => {
        event.preventDefault();
        setSearch(event.target.value);
    };

    return (
        <div className="search">
            <input type="text"
            placeholder="Search..."
            onChange={handleChange}
            value={search}/>
            {state.storeItems.filter(item => {
                if(item.productName.toLowerCase().includes(search.toLocaleLowerCase()) || 
                item.category.toLowerCase().includes(search.toLocaleLowerCase()) ||
                item.manufacturer.toLowerCase().includes(search.toLocaleLowerCase())) {
                    return item;
                }
            }).map((item, key) => {
                return (
                    <div key={key} className="search-list">
                        {search.length > 0 ? 
                        <div>
                            <h3>{item.productName}</h3>
                            <img src={item.productImage} />
                            <br/>
                            <br/>
                            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                                <div>
                                    <Route path={`${url}/:itemId`}>
                                        <ProductDetails data={state.storeItems}/>
                                    </Route>
                                </div>
                            </Modal>
                            <Link className="card-link" to={`${url}/${item.serialNumber}`}>
                                <button className="btn btn-success button-list" onClick={() => setIsOpen(true)}>{item.productName}</button>
                            </Link>
                            <hr/>
                        </div>
                        : null}
                    </div>
                );
            })}
            <Footer/>
        </div>
    )
}

export default SearchBar
