import React from "react";
import './dataRowItem.styles.css';

const DataRowItem = ({children}) => {
    return (
        <div className='dataRowItem'>
            {children}
        </div>
    )
}

export default DataRowItem;

