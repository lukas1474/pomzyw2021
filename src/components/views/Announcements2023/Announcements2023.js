import React, { useEffect, useRef, useState } from 'react';
import styles from './Announcements2023.module.scss';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import news from '../../../data/news2023.json';
import foodDistribution from '../../../data/foodDistribution2023.json';

import Dropdown  from 'react-bootstrap/Dropdown';
import Paginate from '../../utils/Paginate/Paginate';
import Announcement from '../../common/Announcement/Announcement';

const Announcements2023 = () => {
  const announcementsRef = useRef(null);
  const foodDistributionRef = useRef(null);
  const eventsRef = useRef(null);

  const voivodships = foodDistribution.voivodships.sort((a, b) => a.name.localeCompare(b.name));
  const [currentVoivodship, setCurrentVoivodship] = useState(16);
  const filteredVoivodship= voivodships.filter((item) => item.id === currentVoivodship)[0];
  const eventsInVoivodships = news.eventsInVoivodships.sort((a, b) => a.name.localeCompare(b.name));
  const [currentEventsInVoivodships, setCurrentEventsInVoivodships] = useState(16);
  const filteredEventsInVoivodships = eventsInVoivodships.filter((item) => item.id === currentEventsInVoivodships)[0];

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);

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
  const currentPosts = filteredEventsInVoivodships.events.slice(0).reverse().slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {

    setCurrentPage(pageNumber);
    scrollWithOffset(eventsRef.current);
    const newsContainer = eventsRef.current.children[1];
    const timeline = gsap.timeline({
      duration: 0.2,
      defaults: {
        ease: `Power3.easeOut`,
      },
    });
    gsap.set(newsContainer, {autoAlpha: 0, y: 10});
    timeline
      .fromTo(
        newsContainer,
        {autoAlpha: 0, y: 10},
        {autoAlpha: 1, y: 0}
      );
  };

  const setVoivodship = (id) => {
    setCurrentVoivodship(id);
    scrollWithOffset(foodDistributionRef.current);
    const foodDistributionContainer = foodDistributionRef.current.children[1].children[1];
    const timeline = gsap.timeline({
      duration: 0.2,
      defaults: {
        ease: `Power3.easeOut`,
      },
    });
    gsap.set(foodDistributionContainer, {autoAlpha: 0, y: 10});
    timeline
      .fromTo(
        foodDistributionContainer,
        {autoAlpha: 0, y: 10},
        {autoAlpha: 1, y: 0 }
      );
  };

  const setEventsInVoivodships = (id) => {
    setCurrentPage(1);
    setCurrentEventsInVoivodships(id);
    scrollWithOffset(eventsRef.current);
    const eventsContainer = eventsRef.current.children[1].children[1];
    const timeline = gsap.timeline({
      duration: 0.2,
      defaults: {
        ease: `Power3.easeOut`,
      },
    });
    gsap.set(eventsContainer, {autoAlpha: 0, y: 10});
    timeline
      .fromTo(
        eventsContainer,
        {autoAlpha: 0, y: 10},
        {autoAlpha: 1, y: 0}
      );
  };

  return (
    <div className={styles.root} id="ogloszenia" ref={announcementsRef}>
      <div className={styles.section}>
        <h2 className={styles.announcementsTitle}>Ogłoszenia</h2>
        <div className={`container ${styles.container}`} ref={eventsRef}>
          <h4 className={styles.announcementsSubtitle}>{news.title}</h4>
          <div className={`row ${styles.row}`}>
            <Dropdown className={styles.dropdown}>
              <Dropdown.Toggle className="btn-secondary">
                {filteredEventsInVoivodships.name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {eventsInVoivodships.map((item, index) => (
                  <Dropdown.Item className={styles.dropdownItem}  key={index} onClick={() => setEventsInVoivodships(item.id)}>{item.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <ul className={`row ${styles.announcementsList}`}>
            {currentPosts.map((item, index) => (
              <li key={index} className="col-12 col-md-8">
                <Announcement {...item} />
              </li>
            ))}
          </ul>
          <Paginate postsPerPage={postsPerPage} totalPosts={filteredEventsInVoivodships.events.length} currentPage={currentPage} paginate={paginate} />
        </div>
        <div className={`container ${styles.container}`} ref={foodDistributionRef}>
          <h4 className={styles.announcementsSubtitle}>{foodDistribution.title}</h4>
          <div className={`row ${styles.row}`}>
            <Dropdown className={styles.dropdown}>
              <Dropdown.Toggle className="btn-secondary">
                {filteredVoivodship.name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {voivodships.map((item, index) => (
                  <Dropdown.Item className={styles.dropdownItem} key={index} onClick={() => setVoivodship(item.id)}>{item.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <div className={`container ${styles.container}`}>
              <ul className={`row ${styles.announcementsList}`}>
                {filteredVoivodship.places.map((item, index) => (
                  <li key={index} className="col-12 col-md-8">
                    <Announcement {...item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements2023;
