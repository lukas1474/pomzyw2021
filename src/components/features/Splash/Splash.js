import React from 'react';
import styles from './Splash.module.scss';
import ProgramName from '../../common/ProgramName/ProgramName';


const Splash = () => (
  <div className={styles.root} id="splash">
    <img src="/images/splash4.webp" alt="splash" />
    <div className={styles.programNameBox}>
      <ProgramName />
    </div>
    <div className={styles.bottomCurve}>
      <svg id="bottomCurve" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 150">
        <defs>
          <style>{`.curvePath{fill:#f0f0f0;}`}</style>
        </defs>
        <path className="curvePath" d="M0,300H1400V150S775,389,0,150" transform="translate(0 -150)"/>
      </svg>
    </div>
  </div>
);

export default Splash;
