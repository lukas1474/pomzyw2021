import React from 'react';
import styles from './Help.module.scss';

import Posters from '../../features/Posters/Posters';

const Help = () => (
  <div className={styles.root}>
    <h2 className={styles.title}>Nazwa programu</h2>
    <p className={styles.description}>Tutaj będzie opis programu i plakaty</p>
    <Posters />
  </div>
);

export default Help;
