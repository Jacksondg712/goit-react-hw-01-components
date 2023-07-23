import React from "react";
import PropTypes from "prop-types";
import FriendsList from "./components/FriendsList";
import friends from "./json/friends.json";


const Friends =({    
}) =>{
    return(
        <div style={{
          display:"flex",
          alignContent:"center",
          flexDirection:"column",  
          backgroundColor:"#FFFFF0",
          
        }}>
            <ul style={{
                listStyle:"none",
                marginLeft:"auto",
                marginRight:"auto",
            }}>
            {
                friends.map((friend)=>(
                    <FriendsList
                        key={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                ))
            }
            </ul>
        </div>
    )
}

export default Friends;


