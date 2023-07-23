import React from "react";
import PropTypes from "prop-types";

const StatisList = ({
    label,
    percentage,
    color
}) => {
        return(
        <section class="statistics" style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
        }}>
            <li class="item" style={{
                backgroundColor: color,
                padding:"10px 10px 10px 10px",
                display:"flex",
                flexDirection:"column",
                color:"white",
            }}>
                <span class="label">{label}%</span>
                <span class="percentage">{percentage}%</span>
            </li> 
           
        </section>
        )
};

StatisList.propType ={
    label: PropTypes.string,
    percentage:PropTypes.node,
    color: PropTypes.node,
};

export default StatisList;