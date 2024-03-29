
import React from 'react';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p style={{ color: isOnline ? 'green' : 'red' }}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
