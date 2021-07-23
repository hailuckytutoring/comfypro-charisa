import React from 'react'
import PropTypes from 'prop-types';

function DataItem({item}) {
    const {name, category, price, stocked} = item;

    return (
        <div className="item">
            <p>{`${name} category: ${category} price: ${price} ${stocked? 'stocked' : "not in stock"}`}</p>
        </div>
    )
}

DataItem.propTypes = {
    item: PropTypes.object
}

export default DataItem
