import React from 'react';
import { unixToTimeAgo } from '../../../../utils/js/unixToTimeAgo';
import styles from './metadata.css';

interface IMetaDateProps {
    //avatarSrc: string;
    username: string;
    created: number;
}

export function MetaData({ username, created }:IMetaDateProps) {
  return (
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img
          className={styles.avatar}
          src="http"
          alt="avatar"
        />
        <a href="#user-url" className={styles.userName}>
            { username }
        </a>
      </div>
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>
          опубликовано&nbsp;
        </span>
          { unixToTimeAgo(created) }
      </span>
  </div>
  );
}
