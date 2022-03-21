import React, {useEffect, useRef} from 'react';
import styles from '../Announcements/Announcements.module.scss';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import announcements from '../../../data/announcements.json';

const Announcements = () => {
  const departmentRef = useRef(null);

  useEffect(() => {
    const posterItem = departmentRef.current.children;
    gsap.set([posterItem], { autoAlpha: 0, y: 50 });

    ScrollTrigger.batch(posterItem, {
      start: `top bottom -=200px`,
      onEnter: (batch) =>
        gsap.to(batch, {
          autoAlpha: 1,
          delay: 0.5,
          overwrite: true,
          stagger: { each: 0.15 },
          y: 0,
        }),
    });

    ScrollTrigger.addEventListener(`refreshInit`, () =>
      gsap.set(posterItem, { y: 0 })
    );

  }, []);

  return (
    <div className={styles.root} id="ogloszenia">
      <div className={styles.section}>
        <h2 className={styles.announcementsTitle}>Ogłoszenia</h2>
        <div className={`container ${styles.container}`}>
          <ul className={`row ${styles.row}`} ref={departmentRef}>
            {announcements.map((announcements, index) => {
              return(
                <div className={`col-12 col-md-8 ${styles.departmentName}`} key={index}>
                  <p className={styles.announcementsSubtitle}>{announcements.date}</p>
                  <p className={styles.announcementsSubtitle}>{announcements.title}</p>
                  <p className={styles.announcementsDetails}>{announcements.subtitle}</p>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
