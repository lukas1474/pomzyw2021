import React from 'react';
import styles from './AboutUs.module.scss';

import { Container } from 'react-bootstrap';

import aboutUs from '../../../data/aboutUs.json';

import programLogo from '../../../posters/pomzywlogo.webp';
import starokatolickiLogo from '../../../posters/KSLogo.webp';

const AboutUs = () => {
  return (
    <Container className={styles.root}>
      <h2 className={styles.aboutUsTitle}>{aboutUs.title}</h2>

      <div className={styles.logo}>
        <img className={styles.descriptionLogo}src={starokatolickiLogo} alt="logo"/>
        <img className={styles.descriptionLogo}src={programLogo} alt="logo"/>
      </div>
      <p dangerouslySetInnerHTML={{__html: aboutUs.description1}} className={styles.aboutUsDesc}/>
      <p dangerouslySetInnerHTML={{__html: aboutUs.description2}} className={styles.aboutUsDesc}/>
      <p dangerouslySetInnerHTML={{__html: aboutUs.description3}} className={styles.aboutUsDesc}/>
      <p dangerouslySetInnerHTML={{__html: aboutUs.description4}} className={styles.aboutUsDesc}/>
      <p dangerouslySetInnerHTML={{__html: aboutUs.description5}} className={styles.aboutUsDesc}/>

    </Container>
  );
};

export default AboutUs;
