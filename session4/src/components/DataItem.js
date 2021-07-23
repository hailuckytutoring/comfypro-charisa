import React from 'react'

function DataItem({item}) {
    const {name, category, price, stocked} = item;

    return (
        <div className="item">
            <p>{`${name} category: ${category} price: ${price} ${stocked? 'stocked' : "not in stock"}`}</p>
        </div>
    )
}

export default DataItem
