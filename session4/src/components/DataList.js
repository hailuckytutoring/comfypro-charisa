import React from 'react'
import DataItem from './DataItem';
import PropTypes from 'prop-types';

function DataList({dataList}) {

    function renderData(){
        console.log(dataList);


        const renderedList = []
        dataList.forEach((item, index)=>{
            renderedList.push(<DataItem key={index} item={item} />)
        })

        // const renderedList = dataList.map((item, index) => {
        //     return (<p key={index}>{`${item.name} category: ${item.category} price: ${item.price} ${item.stocked? 'stocked' : "not in stock"}`}</p>)
        // })

        return renderedList;
    }

    return (
        <div>
            {renderData()}
        </div>
    )
}

// Define what type of data you want for your props
DataList.propTypes = {
    dataList: PropTypes.array
}


export default DataList
