import React, {useEffect, useRef } from 'react';
import styles from './ProgramDepartments.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import departments from '../../../data/departments.json';

const ProgramDepartments = () => {
  const departmentRef = useRef(null);
  useEffect(() => {
    const departmentsItem = departmentRef.current.children;
    gsap.set([departmentsItem], { autoAlpha: 0, y: 100 });
    ScrollTrigger.batch(departmentsItem, {
      start: `top bottom`,
      onEnter: (batch) =>
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          stagger: { each: 0.15 },
          overwrite: true,
        }),
    });
    ScrollTrigger.addEventListener(`refreshInit`, () =>
      gsap.set(departmentsItem, { y: 0 })
    );
  }, []);
  return (
    <div className={styles.root}>
      <h2 className={styles.departmentsTitle}>Gdzie szukać pomocy?</h2>
      <div className={`container ${styles.container}`} ref={departmentRef}>
        {departments.map((department, index) => {
          return(
            <ul className={`row ${styles.row}`} key={index} >
              <li className={`col-12 col-sm-12 col-md-7 col-lg-6 col-xl-5 ${styles.departmentName}`} >
                <p className={styles.departmentsSubtitle}>{department.name}</p>
              </li>
              <li className={`col-12 col-sm-12 col-md-5 col-lg-4 col-xl-4 ${styles.departmentAddress}`} >
                <p className={styles.departmentDetails}>{department.address}</p>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default ProgramDepartments;
