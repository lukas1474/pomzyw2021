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
        <p dangerouslySetInnerHTML={{__html: aboutUs.description1}} className={styles.aboutUsDesc}/>
        <p dangerouslySetInnerHTML={{__html: aboutUs.description2}} className={styles.aboutUsDesc}/>
        <p dangerouslySetInnerHTML={{__html: aboutUs.description3}} className={styles.aboutUsDesc}/>
        <p dangerouslySetInnerHTML={{__html: aboutUs.description4}} className={styles.aboutUsDesc}/>
        <p dangerouslySetInnerHTML={{__html: aboutUs.description5}} className={styles.aboutUsDesc}/>
      </div>
    </div>
  );
};

export default AboutUs;
