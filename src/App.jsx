import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './data/data.json';
import data from './data/data2.json';
import friends from './data/friends.json';
import transactions from './transactions.json';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory data={transactions} />
    </>
  );
};
