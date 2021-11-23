import React from 'react';
import styles from './Help.module.scss';

import AboutProgram from '../../common/AboutProgram/AboutProgram';
import ProgramName from '../../common/ProgramName/ProgramName';
import Posters from '../../features/Posters/Posters';

const Help = () => (
  <div className={styles.root}>
    <ProgramName />
    <AboutProgram />
    <Posters />
  </div>
);

export default Help;
