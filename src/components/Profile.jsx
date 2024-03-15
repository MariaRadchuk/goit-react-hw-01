import React from 'react';
import styles from './Profile.module.css'; // Імпорт CSS модулю

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={styles.profile}> {/* Використання класу з CSS модулю */}
      <div className={styles.description}>
        <img src={image} alt={`${name}'s Avatar`} className={styles.avatar} /> {/* Використання name для атрибуту alt */}
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
