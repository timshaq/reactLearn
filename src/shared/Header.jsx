import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import styles from './header.less';

function HeaderComponent() {
  return (
    <header>
      <h1 className={styles.title}>
        Hello React
        <div className={styles['title-mask']}>Hello React</div>
      </h1>
      <button className={styles.btn}>Button</button>
    </header>
  )
};

export const Header = hot(HeaderComponent);
