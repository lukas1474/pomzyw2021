import React from 'react';
import styles from './Header.module.scss';
import  Navigation from '../Navigation/Navigation';
import  Splash  from '../../views/Splash/Splash';

const Header = () => (
  <header className={styles.header}>
    <Navigation />
    <img src="/images/splash4.webp" alt="splash" />
    <Splash />
  </header>
);

export default Header;
