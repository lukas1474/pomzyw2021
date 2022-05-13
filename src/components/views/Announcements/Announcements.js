import React, {useEffect, useRef} from 'react';
import styles from '../Announcements/Announcements.module.scss';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import announcements from '../../../data/announcements.json';

import Announcement from '../../common/Announcement/Announcement';

const Announcements = () => {
  const departmentRef = useRef(null);
  const announcementsRef = useRef(null);

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

    announcementsRef.current.scrollIntoView();

  }, []);

  return (
    <div className={styles.root} id="ogloszenia" ref={announcementsRef}>
      <div className={styles.section}>
        <h2 className={styles.announcementsTitle}>Ogłoszenia</h2>
        <div className={`container ${styles.container}`}>
          <h4 className={styles.announcementsSubtitle}>{announcements.eventsTitle}</h4>
          <ul className={`row ${styles.row}`} ref={departmentRef}>
            {announcements.events.slice(0).reverse().map((announcement, index) => (
              <li key={index}>
                <Announcement {...announcement} />
              </li>
            ))}
          </ul>
        </div>
        <div className={`container ${styles.container}`}>
          <h4 className={styles.announcementsSubtitle}>{announcements.giveOutFoodTitle}</h4>
          <ul className={`row ${styles.row}`} ref={departmentRef}>
            {announcements.giveOutFoodEvents.map((announcement, index) => (
              <div className={`col-12 col-md-8 ${styles.departmentName}`} key={index}>
                <p className={styles.announcementSubtitle}>{announcement.where}</p>
                <p className={styles.announcementDetails}>{announcement.january}</p>
                <p className={styles.announcementDetails}>{announcement.januaryDates}</p>
                <p className={styles.announcementDetails}>{announcement.february}</p>
                <p className={styles.announcementDetails}>{announcement.februaryDates}</p>
                <p className={styles.announcementDetails}>{announcement.march}</p>
                <p className={styles.announcementDetails}>{announcement.marchDates}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
