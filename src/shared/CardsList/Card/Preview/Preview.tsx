import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src="https://cdn.dribbble.com/users/1312595/screenshots/13945557/media/bb5b2bf1ca2525ecf4d956274969d7e2.png?compress=1&resize=400x300"
        alt=""
      />
    </div>
  );
}
