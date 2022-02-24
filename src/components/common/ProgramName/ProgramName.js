import React from 'react';
import styles from '../ProgramName/ProgramName.module.scss';

import programName from '../../../data/programName.json';

const ProgramName = () => {

  return(
    <div className={styles.root}>
      <h1 className={styles.programName}>{programName.title}</h1>
    </div>
  );};

export default ProgramName;
