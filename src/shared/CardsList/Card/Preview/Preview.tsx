import React from 'react';
import styles from './preview.css';

interface IPreviewProps {
    previewSrc: string;
}

export function Preview({ previewSrc }: IPreviewProps) {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src={previewSrc}
        alt=""
      />
    </div>
  );
}
