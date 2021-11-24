import React from 'react';
import styles from './ProgramDepartments.module.scss';

import { Container, Row } from 'react-bootstrap';

const ProgramDepartments = () => {
  let data = [
    {
      id: 1,
      name: 'Oddział Śląski w Katowicach 1',
      address: 'ul. Słoneczna 1, 01-100 Katowice',
      nrTel: '+48 123 456 789',
      mail: 'odzialkatowice@program.pl',
    },
    {
      id: 2,
      name: 'Oddział Śląski w Katowicach 2',
      address: 'ul. Słoneczna 1, 01-100 Katowice',
      nrTel: '+48 123 456 789',
      mail: 'odzialkatowice@program.pl',
    },
    {
      id: 3,
      name: 'Oddział Śląski w Katowicach 3',
      address: 'ul. Słoneczna 1, 01-100 Katowice',
      nrTel: '+48 123 456 789',
      mail: 'odzialkatowice@program.pl',
    },
    {
      id: 4,
      name: 'Oddział Śląski w Katowicach 4',
      address: 'ul. Słoneczna 1, 01-100 Katowice',
      nrTel: '+48 123 456 789',
      mail: 'odzialkatowice@program.pl',
    },
    {
      id: 5,
      name: 'Oddział Śląski w Katowicach 5',
      address: 'ul. Słoneczna 1, 01-100 Katowice',
      nrTel: '+48 123 456 789',
      mail: 'odzialkatowice@program.pl',
    },
    {
      id: 6,
      name: 'Oddział Śląski w Katowicach 6',
      address: 'ul. Słoneczna 1, 01-100 Katowice',
      nrTel: '+48 123 456 789',
      mail: 'odzialkatowice@program.pl',
    },
    {
      id: 7,
      name: 'Oddział Śląski w Katowicach 7',
      address: 'ul. Słoneczna 1, 01-100 Katowice',
      nrTel: '+48 123 456 789',
      mail: 'odzialkatowice@program.pl',
    },
    {
      id: 8,
      name: 'Oddział Śląski w Katowicach 8',
      address: 'ul. Słoneczna 1, 01-100 Katowice',
      nrTel: '+48 123 456 789',
      mail: 'odzialkatowice@program.pl',
    },
  ];

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Gdzie szukać pomocy?</h2>
      <Container className={styles.container}>
        {data.map((department, index) => {
          return(
            <Row className={styles.row} key={index}>
              <div className={styles.department}>
                <h3 className={styles.departmentTitle}>{department.name}</h3>
                <p className={styles.departmentDetails}>{department.address}</p>
                <p className={styles.departmentDetails}>{department.nrTel}</p>
                <p className={styles.departmentDetails}>{department.mail}</p>
              </div>
            </Row>
          );
        })}
      </Container>
    </div>
  );
};

export default ProgramDepartments;
