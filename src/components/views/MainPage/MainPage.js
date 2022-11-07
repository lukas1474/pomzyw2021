import React from 'react';
import styles from './MainPage.module.scss';

import AboutProgram from '../../common/AboutProgram/AboutProgram';
import ProgramDepartments from '../../common/ProgramDepartments/ProgramDepartments';
import AboutUs from '../../common/AboutUs/AboutUs';
import Contact from '../../common/Contact/Contact';
import Splash from '../../features/Splash/Splash';

const MainPage = () => (
  <div className={styles.root} id="mainPage">
    <section className={styles.HeroSection}>
      <Splash />
    </section>
    <section className={styles.MainViewSection} id="oProgramie">
      <AboutProgram />
    </section>
    <section className={styles.MainViewSection}  id="punktyPomocy">
      <ProgramDepartments />
    </section>
    <section className={styles.MainViewSection} id="oNas">
      <AboutUs />
    </section>
    <section className={styles.MainViewSection} id="kontakt">
      <Contact />
    </section>
  </div>
);

export default MainPage;
