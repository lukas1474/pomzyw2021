import React from 'react';
import styles from '../Footer/Footer.module.scss';

const Footer = () => (
  <footer className={styles.root}>
    <div className={styles.yearBox}>
      <div className={styles.churchLinkBox}>
        <p className={styles.textFooter}>© 2022</p>
        <a href="https://www.starokatolicki.eu/" className={styles.textFooter}>Kościół Starokatolicki w RP</a>
      </div>
      <p className={styles.textFooter}>
        {` `}
        Designed & Coded by <a href="mailto:info@scriptorium.dev">Scriptorium</a>
        {` `}
      </p>
    </div>
  </footer>
);

export default Footer;
