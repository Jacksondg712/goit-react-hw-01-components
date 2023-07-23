import React from "react";
import PropTypes from "prop-types";


const TransacList = ({
    type,
    amount,
    currency
}) => {
    return(
        <tbody>
            <tr>
                <td style={{border:"solid", paddingLeft:"auto", paddingRight:"auto"}}>{type}</td>
                <td style={{border:"solid", paddingLeft:"auto", paddingRight:"auto"}}>{amount}</td>
                <td style={{border:"solid", paddingLeft:"auto", paddingRight:"auto"}}>{currency}</td>
            </tr>
        </tbody>
    )
};

TransacList.prototype ={
    type:PropTypes.string,  
    amount:PropTypes.node,
    currency:PropTypes.string,
}

export default TransacList;