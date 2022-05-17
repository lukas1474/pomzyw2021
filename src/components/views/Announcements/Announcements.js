import React, { useEffect, useRef, useState } from 'react';
import styles from './Announcements.module.scss';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import news from '../../../data/news.json';
import foodDistribution from '../../../data/foodDistribution.json';

import Paginate from '../../utils/Paginate/Paginate';
import Announcement from '../../common/Announcement/Announcement';

const Announcements = () => {
  const announcementsRef = useRef(null);
  const newsRef = useRef(null);

  const events = news.events.slice(0).reverse();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const scrollWithOffset = (element) => {
    const yOffset = -100;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  useEffect(() => {
    const announcements = announcementsRef.current.children[0].children;
    gsap.set([announcements], { autoAlpha: 0, y: 50 });

    ScrollTrigger.batch([announcements], {
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
      gsap.set([announcements], { y: 0 })
    );


    scrollWithOffset(announcementsRef.current);

  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = events.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {

    setCurrentPage(pageNumber);
    scrollWithOffset(newsRef.current);
  };
  return (
    <div className={styles.root} id="ogloszenia" ref={announcementsRef}>
      <div className={styles.section}>
        <h2 className={styles.announcementsTitle}>Ogłoszenia</h2>
        <div className={`container ${styles.container}`} ref={newsRef}>
          <h4 className={styles.announcementsSubtitle}>{news.title}</h4>
          <ul className={`row ${styles.announcementsList}`}>
            {currentPosts.map((item, index) => (
              <li key={index} className="col-12 col-md-8">
                <Announcement {...item} />
              </li>
            ))}
          </ul>
          <Paginate postsPerPage={postsPerPage} totalPosts={events.length} currentPage={currentPage} paginate={paginate} />
        </div>
        <div className={`container ${styles.container}`}>
          <h4 className={styles.announcementsSubtitle}>{foodDistribution.title}</h4>
          <div className={`row ${styles.row}`}>
            {/* //TODO: Dropdown z filtrem*/}
            {foodDistribution.voivodships.map((item, index) => (
              <div key={index} className={`container ${styles.container}`}>
                <h5>{item.name}</h5>
                <ul className={`row ${styles.announcementsList}`}>
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
