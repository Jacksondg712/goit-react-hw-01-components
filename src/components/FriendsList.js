import React from "react";
import PropTypes from "prop-types";


const FriendsList = ({
    avatar,
    name,
    isOnline,
}) => {
    return(
    <li style={{
        display:"flex",
        padding:"10px",
        border:"solid",
        gap:"10px",
        marginBottom:"10px",
    }}>
        { 
            isOnline == true && (
                <div style={{
                    width:"10px",
                    height:"10px",
                    borderRadius:"50%",
                    backgroundColor:"green",
                }}>

            </div>)
        }
        {
            isOnline == false &&(
                <div style={{
                    width:"10px",
                    height:"10px",
                    borderRadius:"50%",
                    backgroundColor:"red",
                }}>

            </div>)
        }
        <img src={avatar} alt="avatar"
        style={{
            width:"20px",
            height:"20px",
            borderRadius:"5px",
        }} />
        <span>{name}</span>
    </li>
    )
};

FriendsList.propTypes={
    isOnline:PropTypes.bool,
    avatar:PropTypes.string,
    name:PropTypes.string,
};

export default FriendsList;