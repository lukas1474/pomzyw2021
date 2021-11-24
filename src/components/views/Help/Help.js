import React from 'react';
import styles from './Help.module.scss';

import AboutProgram from '../../common/AboutProgram/AboutProgram';
import ProgramName from '../../common/ProgramName/ProgramName';
import Posters from '../../features/Posters/Posters';
import ProgramDepartments from '../../common/ProgramDepartments/ProgramDepartments';

const Help = () => (
  <div className={styles.root}>
    <ProgramName />
    <AboutProgram />
    <Posters />
    <ProgramDepartments />
  </div>
);

export default Help;
