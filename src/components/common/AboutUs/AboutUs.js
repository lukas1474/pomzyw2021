import React from 'react';
import styles from './AboutUs.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

import logo from '../../../posters/pomzywlogo.webp';

import aboutUs from '../../../data/aboutUs.json';

const AboutUs = () => {
  return (
    <Container className={styles.root}>
      <h2 className={styles.aboutUsTitle}>{aboutUs.title}</h2>
      <Row className={styles.asd}>
        <Col className={styles.colLogo}>
          <img src={logo} alt="logo"/>
        </Col>
        <Col  className={styles.text}>
          <p className={styles.aboutUsDesc1}>{aboutUs.description1}</p>
          <p className={styles.aboutUsDesc1}>{aboutUs.description2}</p>
          <p className={styles.aboutUsDesc1}>{aboutUs.description3}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
