import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import styles from './header.less';

function HeaderComponent() {
  return (
    <header>
      <h1 className={styles.title}>H1 Header</h1>
      <button className={styles.btn}>Click</button>
    </header>
  )
};

export const Header = hot(HeaderComponent);
