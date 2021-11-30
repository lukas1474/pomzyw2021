import React from 'react';
import styles from './MainPage.module.scss';

import AboutProgram from '../../common/AboutProgram/AboutProgram';
import Posters from '../../features/Posters/Posters';
import ProgramDepartments from '../../common/ProgramDepartments/ProgramDepartments';
import AboutUs from '../../common/AboutUs/AboutUs';

const MainPage = () => (
  <div className={styles.root} id="mainPage">
    <section className={styles.MainViewSection} id="oNas">
      <AboutUs />
    </section>
    <section className={styles.MainViewSection} id="oProgramie">
      <AboutProgram />
    </section>
    <section className={styles.MainViewSection} id="plakaty">
      <Posters />
    </section>
    <section className={styles.MainViewSection}  id="punktyPomocy">
      <ProgramDepartments />
    </section>
  </div>
);

export default MainPage;
