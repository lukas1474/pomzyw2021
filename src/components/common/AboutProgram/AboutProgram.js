import React from 'react';
import styles from '../AboutProgram/AboutProgram.module.scss';
import { Col } from 'react-bootstrap';

import aboutProgram from '../../../data/aboutProgram.json';

const AboutProgram = () => (
  <div className={styles.root}>
    <h2 className={styles.aboutProgramTitle}>{aboutProgram.title}</h2>
    <p className={styles.aboutProgram}>{aboutProgram.description1}</p>
    <p className={styles.aboutProgram1}>{aboutProgram.description2}</p>
    <p className={styles.aboutProgram}>{aboutProgram.description3}</p>
    <div className={styles.contactBox}>
      <Col className="d-flex align-items-center justify-content-center flex-column flex-md-row pb-3 pb-md-0">
        <p> {aboutProgram.description4}</p>
        <a className={styles.aboutProgram2} href="tel:+48 696 645 486">+48 696 645 486</a>
      </Col>
      <Col className="d-flex align-items-center justify-content-center flex-column flex-md-row">
        <p> {aboutProgram.description5}</p>
        <a className={styles.aboutProgram2} href="mailto:kontakt@pomoczywnosciowa.pl">kontakt@pomoczywnosciowa.pl</a>
      </Col>
    </div>
  </div>
);

export default AboutProgram;
