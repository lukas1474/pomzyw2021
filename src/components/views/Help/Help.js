import React from 'react';
import styles from './Help.module.scss';

import AboutProgram from '../../common/AboutProgram/AboutProgram';
import ProgramName from '../../common/ProgramName/ProgramName';

const Help = () => (
  <div className={styles.root}>
    <ProgramName />
    <AboutProgram />
  </div>
);

export default Help;
