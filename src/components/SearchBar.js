import React, { useState, useContext } from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import ShopContext from '../context/ShopContext';
import Footer from '../components/Footer';
import './SearchBar.css';


function SearchBar() {
    const [search, setSearch] = useState("");
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
                if (search == "") {
                    return (
                        <div>
                            <p>Please enter a search!</p>
                        </div>
                    );
                } else if(item.productName.toLowerCase().includes(search.toLocaleLowerCase()) || 
                item.category.toLowerCase().includes(search.toLocaleLowerCase())) {
                    return item;
                }
            }).map((item, key) => {
                return (
                    <div key={key}>
                        {search.length > 0 
                        ? <div>
                            <p>{item.productName}</p>
                            <Link to={`products/${item.serialNumber}`}>Details</Link>
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
