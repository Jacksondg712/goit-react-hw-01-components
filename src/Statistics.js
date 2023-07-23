import React from "react";
import PropTypes from "prop-types";
import StatisList from "./components/StatisList";
import data from "./json/data.json";
import StatisTitle from "components/StatisTitle";

const Statistics = ({
}) => {
        return(
            <div style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                paddingTop: "50px",
                backgroundColor:"#3DED97"
              }}>
                <StatisTitle
                    title= "Upload stats"
                />
                <ul class="stat-list" style={{
                      display:"flex",
                      flexDirection:"row",
                      listStyle:"none",
                      padding:"0px",
                      marginTop:"0px",
                      marginLeft:"auto",
                      marginRight:"auto",
                 }}>
                  {
                    data.map((dat) =>(
                      
                      <StatisList
                        key={dat.id}
                        label={dat.label}
                        percentage={dat.percentage}
                        color={dat.color}
                      />
                    ))
                  }
                </ul>
              </div>
        )
};



export default Statistics;