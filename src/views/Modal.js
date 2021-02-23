import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import './Modal.css'

const modalStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    border: 'solid',
    borderRadius: '10%',
    borderColor: '#0d9263',
    padding: '50px',
    zIndex: 1000
}

const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(73,75,75, .7)',
    zIndex: 1000
}

function Modal({open, children, onClose}) {
    if (!open) return null;

    return ReactDom.createPortal(
        <>
            <div style={overlayStyles} />
            <div style={modalStyles}>
                
                <Link to="/products">
                    <button className="btn btn-warning modal-button" onClick={onClose}>Close</button>
                </Link>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal
