import React from 'react';
import styles from './AboutUs.module.scss';

import aboutUs from '../../../data/aboutUs.json';

const AboutUs = () => (
  <div className={styles.root}>
    <h2 className={styles.aboutUsTitle}>{aboutUs.title}</h2>
    <div className={styles.aboutUsContent}>
      <div className={styles.aboutUsLogo}>
        <img className={styles.aboutUsLogoImage} src="/images/logo-starokatolicki__red.webp"alt="Logo Starokatolicki"/>
        {/* <img className={styles.aboutUsLogoImage} src="/images/logo-calatrava.webp" alt="Logo Program"/> */}
      </div>
      <p className={styles.aboutUsDescription}>{aboutUs.descriptionChurchRow1}</p>
      <p className={styles.aboutUsDescription}>{aboutUs.descriptionChurchRow2}</p>
      {/* <p className={styles.aboutUsDescription}>{aboutUs.descriptionChurchRow3}</p> */}
      {/* <p className={styles.aboutUsSubtitle}>{aboutUs.subtitleChurch}</p> */}
      {/* <p className={styles.aboutUsDescription}>{aboutUs.descriptionChurchRow4}</p> */}
      {/* <p className={styles.aboutUsDescription}>{aboutUs.descriptionChurchRow5}</p> */}
    </div>
  </div>
);

export default AboutUs;
