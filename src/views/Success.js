import React from 'react'
import Footer from '../components/Footer'
import './Success.css'

function Success() {
    return (
        <div className="success">
            <h1>Congratulations! Your purchase was successful!</h1>
            <img src="https://media.giphy.com/media/S3cCUBRrJVsxG/giphy.gif" alt="zelda thank you"/>
            <Footer/>
        </div>
    )
}

export default Success
