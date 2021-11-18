import React from 'react';
import styles from './Header.module.scss';
import  Splash  from '../../views/Splash/Splash';
const Header = () => (
  <header className={styles.header}>
    <img src="/images/splash.webp" alt="splash" />
    <Splash />
  </header>
);

export default Header;
