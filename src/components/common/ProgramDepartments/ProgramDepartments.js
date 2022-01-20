import React from 'react';
import styles from './ProgramDepartments.module.scss';

import { Container, Row, Col } from 'react-bootstrap';
import departments from '../../../data/departments.json';

const ProgramDepartments = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.departmentsTitle}>Gdzie szukać pomocy?</h2>
      <div className={`container ${styles.container}`}>
        {departments.map((department, index) => {
          return(
            <div className={`row ${styles.row}`} key={index}>
              <div className={`col-12 col-sm-12 col-lg-5 ${styles.department}`}>
                <p className={styles.departmentsSubtitle}>{department.name}</p>
              </div>
              <div className={`col-12 col-sm-12 col-lg-4 ${styles.department}`}>
                <p className={styles.departmentDetails}>{department.address}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgramDepartments;
