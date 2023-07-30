import React from "react";
import PropTypes from "prop-types";
import "./Statistics.css";

const Statistics = ({
    label,
    percentage,
    color
}) => {
        return(
        <section class="statistics">
            <li class="item" style={{backgroundColor: color}}>
                <span class="label">{label}%</span>
                <span class="percentage">{percentage}%</span>
            </li> 
        </section>
      )
};

Statistics.propType ={
    label: PropTypes.string,
    percentage:PropTypes.node,
    color: PropTypes.node,
};


export default Statistics;