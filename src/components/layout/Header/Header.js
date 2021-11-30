import React from 'react';
import styles from './Header.module.scss';

import  Navigation from '../Navigation/Navigation';
import Splash from '../../features/Splash/Splash';

const Header = () => (
  <header className={styles.header}>
    <Navigation />
    <Splash />
  </header>
);

export default Header;
