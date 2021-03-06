import React from 'react';
import styles from './title.css';

interface ITitleProps {
    title: string;
    postUrl: string;
}

export function Title({ title, postUrl }: ITitleProps) {
  return (
    <h2 className={styles.title}>
      <a href={`https://www.reddit.com${postUrl}`} className={styles.postlink}>
          {title}
      </a>
    </h2>
  );
}
