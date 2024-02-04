import React from 'react';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={styles.item}>
            <span
              className={`${styles.status} ${
                isOnline ? styles.online : styles.offline
              }`}
            ></span>
            <img
              className={styles.avatar}
              src={avatar}
              alt="avatar"
              width="40"
            />
            <p className={styles.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
