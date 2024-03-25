import Profile from "./components/Profile/Profile";
import userData from "./data/userData.json";
import friends from "./data/friends.json";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./data/transaction.json";

function App() {
  return (
    <div className="app-container">
      <Profile {...userData} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
