import React from 'react';
import styles from './card.css';
import { KarmaCounter } from './KarmaCounter';
import { Actions } from './Actions';
import { CommentsButton } from './CommentsButton';
import { Menu } from './Menu';
import { MetaData } from './MetaData';
import { Title } from './Title';
import { Preview } from './Preview';

interface ICardProps {
    //avatarSrc: string;
    username: string;
    created: number;
    title: string;
    postUrl: string;
    previewSrc: string;
    commentsNumber: number;
    karma: number
}

export function Card(props:ICardProps) {
    const {
        username, created, // meta data
        title, postUrl, // title
        previewSrc, // preview
        commentsNumber,
        karma,
    } = props;
  return (
    <li className={styles.card}>
      <div className={styles.textContent}>
        <MetaData username={username} created={created} />
        <Title title={title} postUrl={postUrl} />
      </div>
      <Preview previewSrc={previewSrc} />
      <Menu />
      <div className={styles.controls}>
        <KarmaCounter karmaValue={karma} />
        <CommentsButton commentsNumber={commentsNumber} />
        <Actions />
      </div>
    </li>
  );
}
