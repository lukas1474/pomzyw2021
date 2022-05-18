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
          delay: 0.3,
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
      <div className={`container ${styles.container}`}>
        <ul className={`row ${styles.departmentsList}`} ref={departmentRef}>
          {departments.department.map((department, index) => {
            return(
              <li className={`col-12 col-md-8 ${styles.departmentContainer}`} key={index}>
                <p className={styles.departmentTitle}>{department.title}</p>
                <p className={styles.departmentDetails}>{department.subtitle}</p>
                <p className={styles.departmentDetails}>{department.coordinator}</p>
                <p className={styles.departmentDetails}>{department.address}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProgramDepartments;
