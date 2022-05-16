import React, { useEffect, useRef } from 'react';
import styles from './Announcements.module.scss';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import news from '../../../data/news.json';
import foodDistribution from '../../../data/foodDistribution.json';

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

    announcementsRef.current.scrollIntoView({ behavior: 'smooth' });

  }, []);
  //TODO: Poprawić animacje
  return (
    <div className={styles.root} id="ogloszenia" ref={announcementsRef}>
      <div className={styles.section}>
        <h2 className={styles.announcementsTitle}>Ogłoszenia</h2>
        <div className={`container ${styles.container}`}>
          <h4 className={styles.announcementsSubtitle}>{news.title}</h4>
          <ul className={`row ${styles.announcementsList}`} ref={departmentRef}>
            {news.events.slice(0).reverse().map((item, index) => (
              <li key={index} className="col-12 col-md-8">
                {/* //TODO: Paginacja
                */}
                <Announcement {...item} />
              </li>
            ))}
          </ul>
        </div>
        <div className={`container ${styles.container}`}>
          <h4 className={styles.announcementsSubtitle}>{foodDistribution.title}</h4>
          <div className={`row ${styles.row}`} ref={departmentRef}>
            {/* //TODO: Dropdown z filtrem*/}
            {foodDistribution.voivodships.map((item, index) => (
              <div key={index} className={`container ${styles.container}`}>
                <h5>{item.name}</h5>
                <ul className={`row ${styles.announcementsList}`} ref={departmentRef}>
                  {item.places.map((item, index) => (
                    <li key={index} className="col-12 col-md-8">
                      <Announcement {...item} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
