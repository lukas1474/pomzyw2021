import React from 'react';
import styles from './ProgramDepartments.module.scss';

import { Container, Row, Col } from 'react-bootstrap';

import departments from '../../../data/departments.json';

const ProgramDepartments = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Gdzie szukać pomocy?</h2>
      <Container className={styles.container}>
        {departments.map((department, index) => {
          return(
            <Row className={styles.row} key={index}>
              <Col className={`${styles.department} col-12 col-md-6 col-lg-4`}>
                <h3 className={styles.departmentTitle}>{department.name}</h3>
                <p className={styles.departmentDetails}>{department.address}</p>
                <p className={styles.departmentDetails}>{department.nrTel}</p>
                <p className={styles.departmentDetails}>{department.mail}</p>
              </Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
};

export default ProgramDepartments;
