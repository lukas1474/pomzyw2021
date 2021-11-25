import React from 'react';
import styles from './Splash.module.scss';
// import ProgramName from '../../common/ProgramName/ProgramName';
// TODO - import przygotowany doi przeniesienia nazwy z main view do header


const Splash = () => (
  <div className={styles.root}>
    {/* <ProgramName /> */}
    <svg id="curve2" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 150">
      <defs>
        <style>{`.cls-1{fill:#f0f0f0;}`}</style>
      </defs>
      <path className="cls-1" d="M0,300H1400V150S775,389,0,150" transform="translate(0 -150)"/>
    </svg>
  </div>
);

export default Splash;
