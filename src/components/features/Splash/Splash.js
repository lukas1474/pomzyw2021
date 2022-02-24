import React, {useEffect, useRef } from 'react';
import styles from './Splash.module.scss';

import { gsap } from 'gsap';

import ProgramName from '../../common/ProgramName/ProgramName';
import Starokatolicki from '../../../images/logo-starokatolicki__white.svg';

const Splash = () => {
  const programNameRef = useRef(null);

  useEffect(() => {
    const programNameItem = programNameRef.current.children;
    const timeline = gsap.timeline({
      duration: 0.3,
      delay: 0.5,

      defaults: {
        ease: `Power3.easeOut`,
      },
    });
    gsap.set([programNameItem], { autoAlpha: 0, y: 50});

    timeline
      .to(
        programNameItem,
        {
          autoAlpha: 1,
          stagger: { each: 0.15 },
          y: 0,
        }
      );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return(
    <div className={styles.root} id="splash">
      <div className={styles.programNameBox} ref={programNameRef}>
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
};

export default Splash;
