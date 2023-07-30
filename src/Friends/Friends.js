import React from "react";
import PropTypes from "prop-types";
import "./Friends.css";


const Friends = ({
    avatar,
    name,
    isOnline,
}) => {
    return(
    <li className="friendslist">
        { 
            isOnline === true && (
                <div style={{
                    width:"10px",
                    height:"10px",
                    borderRadius:"50%",
                    backgroundColor:"green",
                    marginTop:"8px",
                }}>

            </div>)
        }
        {
            isOnline === false &&(
                <div style={{
                    width:"10px",
                    height:"10px",
                    borderRadius:"50%",
                    backgroundColor:"red",
                    marginTop:"8px",
                }}>

            </div>)
        }
        <img src={avatar} alt="avatar" className="avatarF"/>
        <span>{name}</span>
    </li>
    )
};

Friends.propTypes={
    isOnline:PropTypes.bool,
    avatar:PropTypes.string,
    name:PropTypes.string,
};

export default Friends;


