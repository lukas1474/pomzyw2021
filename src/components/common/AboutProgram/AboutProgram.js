import React from 'react';
import styles from '../AboutProgram/AboutProgram.module.scss';

import aboutProgram from '../../../data/aboutProgram.json';

const AboutProgram = () => (
  <div className={styles.root}>
    <h2 className={styles.aboutProgramTitle}>{aboutProgram.title}</h2>
    <p className={styles.aboutProgram}>{aboutProgram.description1}</p>
    <p className={styles.aboutProgram1}>{aboutProgram.description2}</p>
    <p className={styles.aboutProgram}>{aboutProgram.description3}</p>
    <p className={styles.aboutProgram2}>{aboutProgram.description4}</p>
  </div>
);

export default AboutProgram;
