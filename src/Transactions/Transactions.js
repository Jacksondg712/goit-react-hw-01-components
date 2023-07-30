import React from "react";
import PropTypes from "prop-types";


const Transactions = ({
    type,
    amount,
    currency
}) => {
    return(
        <tbody>
            <tr>
                <td className="tb">{type}</td>
                <td className="tb">{amount}</td>
                <td className="tb">{currency}</td>
            </tr>
        </tbody>
    )
};

Transactions.prototype ={
    type:PropTypes.string,  
    amount:PropTypes.node,
    currency:PropTypes.string,
}



export default Transactions;