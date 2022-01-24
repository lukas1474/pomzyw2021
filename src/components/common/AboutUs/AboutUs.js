import React, {useEffect, useRef} from 'react';
import styles from './AboutUs.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import aboutUs from '../../../data/aboutUs.json';
const AboutUs = () => {
  const aboutUsRef = useRef(null);
  useEffect(() => {
    const posterItem = aboutUsRef.current;
    gsap.set([posterItem], { autoAlpha: 0, y: 50 });
    ScrollTrigger.batch(posterItem, {
      start: `top bottom -=200px`,
      onEnter: (batch) =>
        gsap.to(batch, {
          delay: 0.5,
          autoAlpha: 1,
          y: 0,
          overwrite: true,
        }),
    });
    ScrollTrigger.addEventListener(`refreshInit`, () =>
      gsap.set(posterItem, { y: 0 })
    );
  }, []);
  return (
    <div className={styles.root}>
      <h2 className={styles.aboutUsTitle}>{aboutUs.title}</h2>
      <div className={styles.aboutUsContent} ref={aboutUsRef}>
        <div className={styles.aboutUsLogo}>
          <img className={styles.aboutUsLogoImage} src="/images/logo-starokatolicki__red.webp"alt="Logo Starokatolicki"/>
        </div>
        <p className={styles.aboutUsDescription}>{aboutUs.descriptionChurchRow1}</p>
        <p className={styles.aboutUsDescription}>{aboutUs.descriptionChurchRow2}</p>
      </div>
    </div>
  );};

export default AboutUs;
