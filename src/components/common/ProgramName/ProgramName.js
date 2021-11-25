import React from 'react';
import styles from '../ProgramName/ProgramName.module.scss';

import programName from '../../../data/programName.json';

const ProgramName = () => (
  <div className={styles.root}>
    <h1 className={styles.programName}>{programName.title}</h1>
    <h2 className={styles.podprogramName}>{programName.subtitle}</h2>
  </div>
);

export default ProgramName;
