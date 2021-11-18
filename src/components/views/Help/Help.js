import React from 'react';
import styles from './Help.module.scss';

const Help = () => (
  <div className={styles.root}>
    <h2 className={styles.title}>Nazwa programu</h2>
    <p className={styles.description}>Tutaj będzie opis programu i plakaty</p>
  </div>
);

export default Help;
