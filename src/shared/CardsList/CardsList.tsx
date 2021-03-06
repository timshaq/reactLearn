import React, {useContext} from 'react';
import styles from './cardslist.css';
import { Card } from './Card';
import { postsContext } from '../context/postsContext';

export function CardsList() {
    const postList = useContext(postsContext);
  return (
    <ul className={styles.cardsList}>
        {
            postList.map((post) => (
                <Card
                    key={post.id}
                    postUrl={post.permalink}
                    created={post.created}
                    previewSrc={post.url}
                    title={post.title}
                    username={post.author}
                    commentsNumber={post.num_comments}
                    karma={post.ups}
                />
            ))
        }
    </ul>
  );
}
