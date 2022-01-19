import React from 'react';
import styles from '../AboutProgram/AboutProgram.module.scss';

import { Col, Row } from 'react-bootstrap';

import aboutProgram from '../../../data/aboutProgram.json';
import foodList from '../../../data/foodList.json';

const AboutProgram = () => (
  <div className={styles.root}>
    <h2 className={styles.aboutProgramTitle}>{aboutProgram.title}</h2>
    <h4 className={styles.aboutProgramSubtitle}>{aboutProgram.subtitleWho}</h4>
    <p className={styles.aboutProgramDescription}>{aboutProgram.descriptionWho}</p>
    <p className={styles.aboutProgramDescription}>
      {aboutProgram.requirements}
      <span className={styles.requirements}>{aboutProgram.requirementsAlone}</span>
      lub
      <span className={styles.requirements}>{aboutProgram.requirementsFamily}</span>
    </p>
    <p className={styles.aboutProgramDescription}>{aboutProgram.requirementsContact}</p>
    <div className={styles.contactBox}>
      <Col className="d-flex align-items-center justify-content-center flex-column flex-md-row pb-3 pb-md-0">
        <p> {aboutProgram.subtitleTel}</p>
        <a className={styles.aboutProgramContactDescription} href="tel:+48 696 645 486">{aboutProgram.descriptionTel}</a>
      </Col>
      <Col className="d-flex align-items-center justify-content-center flex-column flex-md-row">
        <p> {aboutProgram.subtitleMail}</p>
        <a className={styles.aboutProgramContactDescription} href="mailto:kontakt@pomoczywnosciowa.pl">{aboutProgram.descriptionMail}</a>
      </Col>
    </div>
    <h4 className={styles.aboutProgramSubtitle}>{aboutProgram.subtitleWhat}</h4>
    <p className={styles.aboutProgramDescription}>{aboutProgram.descriptionWhat}</p>
    <ul className={styles.foodListUl}>
      {foodList.map((item) => (
        <li key={item.id}>
          <Row className={styles.foodListRow}>
            <Col xs={7} sm={4} md={6} lg={4}>{item.listElement}</Col>
            <Col xs={5} sm={3} md={3} lg={3}>{item.quantity}</Col>
          </Row>
        </li>
      ))}
    </ul>
  </div>
);

export default AboutProgram;
