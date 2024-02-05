import React from 'react';
import styles from './FriendList.module.css';

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li className={styles.item}>
      <span
        className={`${styles.status} ${
          isOnline ? styles.online : styles.offline
        }`}
      ></span>
      <img className={styles.avatar} src={avatar} alt="avatar" width="40" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
