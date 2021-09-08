import "./App.css";
import user from "./data/user.json";
import Profile from "./components/Profile/Profile";

import statisticalData from "./data/statistical-data.json";
import Statistics from "./components/Statistics/Statistics";

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
    </div>
  );
}

export default App;
