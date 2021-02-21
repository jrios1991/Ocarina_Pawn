import React from 'react';
import { Link } from 'react-router-dom';
import Landing from '../images/shop-art.jpg';
import './LandingPage.css';

function LandingPage() {
    return (
        <div>
            <h1 className="header">Welcome to Ocarina Pawn Shop!</h1>
            <div>
                <img src={Landing} alt="link in a field" className="landing-image"/>
                <button className="landing-button"><Link to="/products" className="landing-link">Shop Now!</Link></button>
            </div>

        </div>
    )
}

export default LandingPage
