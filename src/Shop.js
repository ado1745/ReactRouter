import React, { useState, useEffect } from 'react';
import './App.css';
import { async } from 'q';

function Shop() {


    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await fetch(`https://fortnite-api.theapinetwork.com/upcoming/get/--header "Authorization: {{8d477adf2433be122f68c10f0b4ab0fd}}`);

        const items = await data.json();
        console.log(items)
    }


    return (
        <div>
            <h1>Shop Page</h1>
        </div>
    );
}

export default Shop;
