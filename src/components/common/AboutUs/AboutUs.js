import React from 'react';
import styles from './AboutUs.module.scss';
import aboutUs from '../../../data/aboutUs.json';

const AboutUs = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.aboutUsTitle}>{aboutUs.title}</h2>
      <div className={styles.aboutUsContent}>
        <div className={styles.logo}>
          <img className={styles.descriptionLogo} src="/images/logo-starokatolicki__red.webp"alt="Logo Starokatolicki"/>
          <img className={styles.descriptionLogo} src="/images/logo-calatrava.webp" alt="Logo Program"/>
        </div>
        <p className={styles.aboutUsDesc}>{aboutUs.description1}</p>
        <p className={styles.aboutUsDesc}>{aboutUs.description2}</p>
        <p className={styles.aboutUsDesc}>{aboutUs.description3}</p>
        <p className={styles.aboutUsTitleDesc}>{aboutUs.titleDescription}</p>
        <p className={styles.aboutUsDesc}>{aboutUs.description4}</p>
        <p className={styles.aboutUsDesc}>{aboutUs.description5}</p>
      </div>
    </div>
  );
};

export default AboutUs;
