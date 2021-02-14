import React from 'react';
import shield from './images/deku-shield.jpg';
import mirror from './images/mirror-shield.jpg';

const ShopContext = React.createContext({
    storeItems: [
        {
            productName: "Deku Shield",
            serialNumber: 1234567,
            price: 50,
            manufacturer: 'lost woods inc',
            category: 'shield',
            quantity: 5,
            productImage: shield
        },
        {
            productName: "Mirror Shield",
            serialNumber: 1234568,
            price: 200,
            manufacturer: 'Gerudo LLC',
            category: 'shield',
            quantity: 2,
            productImage: mirror
        }
    ]
});

export default ShopContext

