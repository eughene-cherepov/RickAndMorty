import React from 'react';

import { Search } from '../../molecules/Search';
import styles from './styles.module.scss';

interface PropTypes {
  logo: JSX.Element | null;
}

export const Header: React.FC<PropTypes> = ({ logo }) => (
  <header className={styles.AppHeader}>
    {logo}
    <Search />
  </header>
);
