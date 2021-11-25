import React from 'react';
import styles from './MainPage.module.scss';

import AboutProgram from '../../common/AboutProgram/AboutProgram';
import ProgramName from '../../common/ProgramName/ProgramName';
import Posters from '../../features/Posters/Posters';
import ProgramDepartments from '../../common/ProgramDepartments/ProgramDepartments';

const MainPage = () => (
  <div className={styles.root}>
    <section id="program">
      <ProgramName />
    </section>
    <section id="oProgramie">
      <AboutProgram />
    </section>
    <section id="posters">
      <Posters />
    </section>
    <section id="punktypomocy">
      <ProgramDepartments />
    </section>
  </div>
);

export default MainPage;