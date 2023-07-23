import React from "react";
import TransacList from "components/TransacList";
import transactions from "./json/transactions.json";

const Transactions = ({
}) => {
    return(
        <table style={{
            marginLeft:"auto",
            marginRight:"auto"
        }}>
            <thead>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </thead>
            {
                transactions.map((transaction) =>(
                    <TransacList
                        key={transaction.id}
                        type={transaction.type}
                        amount={transaction.amount}
                        currency={transaction.currency}
                    />
                ))
            }
        </table>
    )
};

export default Transactions;