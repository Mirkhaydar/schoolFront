import React from 'react';

// import { useHeaderStore } from '../model/header-store'; // Если нужен стор
import { Button } from '@/shared/ui/button';

import styles from './header.module.scss';


export const Header: React.FC = () => {
  // const store = useHeaderStore(); // Если нужен стор

  return (
    <header className={styles.header}>
      <div className={styles.logo}>LaLeGo</div>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Button type="link" href="/">Home</Button>
          </li>
          <li>
            <Button type="link" href="/about">About</Button>
          </li>
          <li>
            <Button type="primary" href="/authorization">Login</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

