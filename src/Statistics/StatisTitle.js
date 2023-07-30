import React from "react";
import PropTypes from "prop-types";


const StatisTitle = ({
    title
}) => {
    return title &&  
    <h2 class="title" style={{
        marginLeft:"auto",
        marginRight:"auto",
        marginBottom:"0px",
        backgroundColor:"#F9FEFF",
        padding:"10px 95px 10px 92px",
    }}>Upload stats</h2>

};

StatisTitle.propTypes ={
    title: PropTypes.string,
};

export default StatisTitle;