import { hot } from 'react-hot-loader/root';
import * as React from 'react';

function HeaderComponent() {
  return (
    <header>
      <h1>H1 Header</h1>
      <button>Click</button>
    </header>
  )
};

export const Header = hot(HeaderComponent);
