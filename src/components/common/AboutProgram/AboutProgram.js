import React from 'react';
import styles from '../AboutProgram/AboutProgram.module.scss';

import aboutProgram from '../../../data/aboutProgram.json';

const AboutProgram = () => (
  <div className={styles.root}>
    <h2 className={styles.aboutProgramTitle}>{aboutProgram.title}</h2>
    <p className={styles.aboutProgram}>{aboutProgram.description}</p>
  </div>
);

export default AboutProgram;
