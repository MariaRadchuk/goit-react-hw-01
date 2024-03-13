import React from 'react';
import Profile from './Profile.jsx';
import FriendList from './FriendList.jsx';
import TransactionHistory from './TransactionHistory.jsx';
import userData from './userData.json';
import friends from './friends.json';
import transactions from './transactions.json';
import styles from './Profile.module.css';
import friendStyles from './FriendListItem.module.css'; 
import transactionStyles from './TransactionHistory.module.css';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
