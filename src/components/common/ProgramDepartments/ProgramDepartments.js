import React from 'react';
import styles from './ProgramDepartments.module.scss';

import departments from '../../../data/departments.json';
import {mainCoordinator} from '../../../data/departments.json';

const ProgramDepartments = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.departmentsTitle}>Gdzie szukać pomocy?</h2>
      <div className={`container ${styles.container}`}>
        {console.log(mainCoordinator)}
        <ul className={`row ${styles.row}`}>
          <div className={`col-12 col-md-8 ${styles.departmentName}`}>
            <p className={styles.departmentsSubtitle}>{mainCoordinator.title}</p>
            <p className={styles.departmentDetails}>{mainCoordinator.subTitle}</p>
            <p className={styles.departmentDetails}>{mainCoordinator.name}</p>
          </div>
          {departments.department.map((department, index) => {
            return(
              <li className={`col-12 col-md-8 ${styles.departmentName}`} key={index}>
                <p className={styles.departmentsSubtitle}>{department.name}</p>
                <p className={styles.departmentDetails}>{department.coordinator}</p>
                <p className={styles.departmentDetails}>{department.address}</p >
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProgramDepartments;
