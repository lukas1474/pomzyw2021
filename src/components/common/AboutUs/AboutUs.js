import React from 'react';
import styles from './AboutUs.module.scss';
import { Container } from 'react-bootstrap';

import logo from '../../../posters/pomzywlogo.webp';

import aboutUs from '../../../data/aboutUs.json';

const AboutUs = () => {
  return (
    <Container className={styles.root}>
      <h2 className={styles.aboutUsTitle}>{aboutUs.title}</h2>
      <div className={styles.div1}>
        <img className={styles.descriptionLogo}src={logo} alt="logo"/>
        <p className={styles.aboutUsDesc}>{aboutUs.description1}</p>
        <p className={styles.aboutUsDesc}>{aboutUs.description2}</p>
        <p className={styles.aboutUsDesc}>{aboutUs.description3}</p>
        <p className={styles.aboutUsDesc}>{aboutUs.description4}</p>
        <p className={styles.aboutUsDesc}>{aboutUs.description5}</p>
      </div>
    </Container>
  );
};

export default AboutUs;
