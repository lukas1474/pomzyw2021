import React from 'react';
import styles from './Splash.module.scss';
import ProgramName from '../../common/ProgramName/ProgramName';
import Starokatolicki from '../../../images/logo-starokatolicki__white.svg';


const Splash = () => (
  <div className={styles.root} id="splash">
    <div className={styles.programNameBox}>
      <ProgramName />
      <img src={Starokatolicki} alt="Starokatolicki" />
    </div>
    <div className={styles.bottomCurve}>
      <svg id="bottomCurve" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 150">
        <path className="curvePath" d="M0,300H1400V150S775,389,0,150" transform="translate(0 -150)"/>
      </svg>
    </div>
  </div>
);

export default Splash;
