import Profile from 'components/Profile/Profile';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';
import Statistic from 'components/Statistic/Statistic';
import FriendsList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import 'index.css';

export const App = () => {
  return (
    <>
      <Profile
        avatar={user.avatar}
        userName={user.username}
        userTag={user.tag}
        userLocation={user.location}
        userStats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />

      <FriendsList friends={friends}></FriendsList>

      <TransactionHistory items={transactions} />
    </>
  );
};
