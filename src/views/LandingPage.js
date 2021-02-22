import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Landing from '../images/shop-art.jpg';
import './LandingPage.css';

function LandingPage() {
    return (
        <div>
            <h1 className="header">Welcome to Ocarina Pawn Shop!</h1>
            <div>
                <img src={Landing} alt="link in a field" className="landing-image"/>
                <Link to="/products" className="landing-link">
                    <button className="landing-button btn btn-outline-success">Shop Now!</button>
                </Link>
            </div>
        <Footer />
        </div>
    )
}

export default LandingPage
