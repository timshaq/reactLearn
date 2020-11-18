import React from 'react';
import styles from './card.css';
import { KarmaCounter } from './KarmaCounter';
import { Actions } from './Actions';
import { CommentsButton } from './CommentsButton';
import { Menu } from './Menu';
import { MetaData } from './MetaData';
import { Title } from './Title';
import { Preview } from './Preview';

export function Card() {
  return (
    <li className={styles.card}>
      <div className={styles.textContent}>
        <MetaData />
        <Title />
      </div>
      <Preview />
      <Menu />
      <div className={styles.controls}>
        <KarmaCounter karmaValue={234} />
        <CommentsButton commentsNumber={13} />
        <Actions />
      </div>
    </li>
  );
}
