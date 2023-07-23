import user from "../json/user.json";
import Profile from "../Profile";
import Statistics from "../Statistics";
import data from "../json/data.json";
import Friends from "Friends";
import Transactions from "Transactions";

export const App = () => {
  console.log(data);
  return (
    <container>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </div>
      <div><Statistics/></div>
      <div><Friends/></div>
      <div><Transactions/></div>
    </container>

    
  );
};
