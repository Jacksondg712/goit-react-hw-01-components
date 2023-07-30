import user from "../json/user.json";
import data from "../json/data.json";
import friends from "../json/friends.json";
import transactions from "../json/transactions.json";

import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import Friends from "../Friends/Friends";
import Transactions from "../Transactions/Transactions";
import StatisTitle from "../Statistics/StatisTitle";

import "../Statistics/Statistics.css";
import "../Friends/Friends.css";
import "../Transactions/Transactions.css"; 


export const App = () => {
  console.log(data);
  return (
    <>
      
       <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
       />
      <div className="containerS">
        <StatisTitle title= "Upload stats"/>
        <ul class="stat-list">
          {
            data.map((dat) =>(
              <Statistics
                key={dat.id}
                label={dat.label}
                percentage={dat.percentage}
                color={dat.color}
              />
            ))
          }
        </ul>
      </div>
      <div className="containerF">
        <ul className="fri-list">
        {
          friends.map((friend)=>(
              <Friends
                  key={friend.id}
                  avatar={friend.avatar}
                  name={friend.name}
                  isOnline={friend.isOnline}
              />
          ))
        }
        </ul>
      </div>
      <div className="conteinerT">
      <table className="table">
            <thead>
                <th className="th">Type</th>
                <th className="th">Amount</th>
                <th className="th">Currency</th>
            </thead>
            {
                transactions.map((transaction) =>(
                    <Transactions
                        key={transaction.id}
                        type={transaction.type}
                        amount={transaction.amount}
                        currency={transaction.currency}
                    />
                ))
            }
        </table>
      </div>
    </>
  );
};
