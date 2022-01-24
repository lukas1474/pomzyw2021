import React, {useEffect, useRef } from 'react';
import styles from '../ProgramName/ProgramName.module.scss';
import { gsap } from 'gsap';
import programName from '../../../data/programName.json';


const ProgramName = () => {
  const programNameRef = useRef(null);
  useEffect(() => {
    const programNameItem = programNameRef.current;
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
          y: 0,
        }
      );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return(
    <div className={styles.root}>
      <h1 className={styles.programName} ref={programNameRef}>{programName.title}</h1>
    </div>
  );};

export default ProgramName;
