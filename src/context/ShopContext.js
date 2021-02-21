import React from 'react';
import shield from '../images/deku-shield.jpg';
import mirror from '../images/mirror-shield.jpg';
import hylian from '../images/hylian-shield.jpg';
import kokiri from '../images/kokiri-tunic.jpg';
import goron from '../images/goron-tunic.jpg';
import zora from '../images/zora-tunic.jpg';
import arrows from '../images/arrows.jpg';
import bomb from '../images/bomb.jpg';
import bombchu from '../images/bombchu.jpg';
import boots from '../images/boots.jpg';

const ShopContext = React.createContext({
    storeItems: [
        {
            productName: "Deku Shield",
            serialNumber: 1,
            price: 50,
            manufacturer: 'Lost Woods Inc.',
            category: 'shield',
            quantity: 0,
            productImage: shield
        },
        {
            productName: "Mirror Shield",
            serialNumber: 2,
            price: 200,
            manufacturer: 'Gerudo LLC',
            category: 'shield',
            quantity: 2,
            productImage: mirror
        },
        {
            productName: "Hylian Shield",
            serialNumber: 3,
            price: 100,
            manufacturer: 'Hyrule Manufacturing',
            category: 'shield',
            quantity: 5,
            productImage: hylian
        },
        {
            productName: "Kokiri Tunic",
            serialNumber: 4,
            price: 75,
            manufacturer: 'Lost Woods Inc.',
            category: 'tunic',
            quantity: 3,
            productImage: kokiri
        },
        {
            productName: "Goron Tunic",
            serialNumber: 5,
            price: 85,
            manufacturer: 'Goron City Armory',
            category: 'tunic',
            quantity: 5,
            productImage: goron
        },
        {
            productName: "Zora Tunic",
            serialNumber: 6,
            price: 85,
            manufacturer: 'Zora Domain Manufacturing',
            category: 'tunic',
            quantity: 4,
            productImage: zora
        },
        {
            productName: "Arrows",
            serialNumber: 7,
            price: 10,
            manufacturer: 'Hyrule Manufacturing',
            category: 'ammo',
            quantity: 50,
            productImage: arrows
        },
        {
            productName: "Bombs",
            serialNumber: 8,
            price: 20,
            manufacturer: 'Goron City Armory',
            category: 'ammo',
            quantity: 25,
            productImage: bomb
        },
        {
            productName: "Bombchu",
            serialNumber: 9,
            price: 30,
            manufacturer: 'Gerudo LLC',
            category: 'ammo',
            quantity: 15,
            productImage: bombchu
        },
        {
            productName: "Kokiri Boots",
            serialNumber: 10,
            price: 75,
            manufacturer: 'Lost Woods Inc.',
            category: 'boots',
            quantity: 2,
            productImage: boots
        },
    ]
});

export default ShopContext

