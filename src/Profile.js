import React from "react";

export default function Profile({
    username,
    tag,
    location,
    avatar,
    followers,
    views,
    likes,
}){
    return(
      <div style={{
        
        width:"100%",
        height:"300px",
        display:"flex",
        justifyContent:"center",
        backgroundColor:"#C8A2C8",

      }}>
          <div class="description"style={{
            position:"absolute",
            borderRadius:"10px 10px 0 0",
            width:"300px",
            marginTop:"20px",
            backgroundColor:"white",

            
          }}>
            <img
              src={avatar}
              alt="User avatar" style={{
                height:"80px",
                with:"80px",
                borderRadius:"50%",
                marginLeft:"110px",
                marginTop:"10px",
              }}
            />
            <p class="name" style={{
              
              display:"flex",
              justifyContent:"center",
              marginTop:"10px",
            }}>{username}</p>
            <p class="tag" style={{
              display:"flex",
              marginTop:"0px",
              justifyContent:"center",
              
            }}>@{tag}</p>
            <p class="location" style={{
              display:"flex",
              justifyContent:"center",
              marginTop:"0px",
              
              height:"20px",
            }}>{location}</p>
          </div>

          <ul class="stats" style={{
            position:"absolute",
            display:"flex",
            flexDirection:"row",
            top:"212px",
            style:"none",
            paddingLeft:"0px",
            backgroundColor:"#7A4988",
            borderRadius:"0 0 10px 10px",
            height:"50px"

            
            

          }} >
            <li style={{
              display:"flex",
              flexDirection:"column",
              marginLeft:"0px",
              paddingLeft:"25px",
              paddingRight:"19px",
              marginTop:"5px",
              


            }}>
              <span class="label">Followers</span>
              <span class="quantity">{followers}</span>
            </li>
            <li style={{
              display:"flex",
              flexDirection:"column",
              marginTop:"5px",            
              paddingLeft:"27px",
              paddingRight:"33px",

            }}>
              <span class="label">Views</span>
              <span class="quantity">{views}</span>
            </li>
            <li style={{
              display:"flex",
              flexDirection:"column",
              marginTop:"5px",
              paddingLeft:"27px",
              paddingRight:"27px",

            }}>
              <span class="label">Likes</span>
              <span class="quantity">{likes}</span>
            </li>
          </ul>
        </div>
    )
};

