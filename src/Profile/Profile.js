import React from "react";
import "./profile.css";


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
      <div className="profile">
          <div className="description">
            <img src={avatar} alt="User avatar" className="avatar" />
            <p className="name">{username}</p>
            <p className="tag" >@{tag}</p>
            <p class="location">{location}</p>
          </div>

          <ul className="stats">
            <li className="followers" style={{
              display:"flex",
              flexDirection:"column",
            }}>
              <span class="label">Followers</span>
              <span class="quantity">{followers}</span>
            </li>
            <li className="views" style={{
              display:"flex",
              flexDirection:"column",
            }}>
              <span class="label">Views</span>
              <span class="quantity">{views}</span>
            </li>
            <li className="likes" style={{
              display:"flex",
              flexDirection:"column",
            }}>
              <span class="label">Likes</span>
              <span class="quantity">{likes}</span>
            </li>
          </ul>
        </div>
    )
};

