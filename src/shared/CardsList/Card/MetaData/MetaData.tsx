import React from 'react';
import styles from './metadata.css';

export function MetaData() {
  return (
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img
          className={styles.avatar}
          src="https://tr-static.eodev.com/files/d78/1f67fb10f8ac282353050840efe48e5d.png"
          alt="avatar"
        />
        <a href="#user-url" className={styles.userName}>
          Дмитрий Гришин
        </a>
      </div>
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>
          опубликовано&nbsp;
        </span>
        4 часа назад
      </span>
  </div>
  );
}
