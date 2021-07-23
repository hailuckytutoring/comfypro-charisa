import React from 'react'

function AvgPrice({dataList}) {

    function showPrice(){

        let totalPrice = 0;

        dataList.forEach(item => {
            const original_priceString = item.price;
            const onlyNumber_priceString = item.price.slice(1, original_priceString.length - 1);
            totalPrice += parseFloat(onlyNumber_priceString);
        });

        return (totalPrice / dataList.length);
    }

    return (
        <div className="avgPrice">
            Average Price: ${Math.round(showPrice())}
        </div>
    )
}

export default AvgPrice
