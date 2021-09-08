import "./App.css";
import user from "./data/user.json";
import Profile from "./components/Profile/Profile";

import statisticalData from "./data/statistical-data.json";
import Statistics from "./components/Statistics/Statistics";

import friends from "./data/friends.json";
import FriendList from "./components/Friends/FriendsList";

import transactions from "./data/transactions.json";
import TransactionHistory from "./components/Transactions/TransactionHistory";

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
