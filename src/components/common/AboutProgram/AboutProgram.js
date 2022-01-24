import React, {useEffect, useRef} from 'react';
import styles from '../AboutProgram/AboutProgram.module.scss';

import { Col, Carousel } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import aboutProgram from '../../../data/aboutProgram.json';
import foodList from '../../../data/foodList.json';

import Posters from '../../features/Posters/Posters';


const AboutProgram = () => {
  const aboutProgramRef = useRef(null);
  useEffect(() => {
    const aboutProgramItem = aboutProgramRef.current.children;
    gsap.set([aboutProgramItem], { autoAlpha: 0, y: 50 });
    ScrollTrigger.batch(aboutProgramItem, {
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
      gsap.set(aboutProgramItem, { y: 0 })
    );
  }, []);
  return (
    <div className={styles.root}>
      <h2 className={styles.aboutProgramTitle}>{aboutProgram.title}</h2>
      <div ref={aboutProgramRef}>
        <h4 className={styles.aboutProgramSubtitle}>{aboutProgram.subtitleWho}</h4>
        <p className={styles.aboutProgramDescription}>{aboutProgram.descriptionWho}</p>
        <p className={styles.aboutProgramDescription}>
          {aboutProgram.requirements}
          <span className={styles.requirements}>{aboutProgram.requirementsAlone}</span>
      lub
          <span className={styles.requirements}>{aboutProgram.requirementsFamily}</span>
        </p>
        <p className={styles.aboutProgramDescription}>{aboutProgram.requirementsContact}</p>
        <div className={styles.contactBox}>
          <Col className="d-flex align-items-center justify-content-center flex-column flex-md-row pb-3 pb-md-0">
            <p> {aboutProgram.subtitleTel}</p>
            <a className={styles.aboutProgramContactDescription} href="tel:+48 696 645 486">{aboutProgram.descriptionTel}</a>
          </Col>
          <Col className="d-flex align-items-center justify-content-center flex-column flex-md-row">
            <p> {aboutProgram.subtitleMail}</p>
            <a className={styles.aboutProgramContactDescription} href="mailto:kontakt@pomoczywnosciowa.pl">{aboutProgram.descriptionMail}</a>
          </Col>
        </div>
        <h4 className={styles.aboutProgramSubtitle}>{aboutProgram.subtitleWhat}</h4>
        <p className={styles.aboutProgramDescription}>{aboutProgram.descriptionWhat}</p>
        <div className={styles.tableBox}>
          <table className={`table table-borderless ${styles.foodListTable}`}>
            <thead className="thead-light">
              <tr>
                <th scope="col">Produkt</th>
                <th className={styles.foodListColumnQuantity} scope="col">Ilość</th>
              </tr>
            </thead>
            {foodList.map((item) => (
              <tbody key={item.id}>
                <tr>
                  <td>{item.listElement}</td>
                  <td className={styles.foodListColumnQuantity}>{item.quantity}</td>
                </tr>
              </tbody >
            ))}
          </table>
        </div>
        <Carousel controls={false} interval={3000} fade={true} className={styles.carousel} pause={false} indicators={false}>
          {aboutProgram.programPartners.map((item) => (
            <Carousel.Item key={item.id} className={styles.carouselItem}>
              <img
                className="d-block w-100"
                src={item.src}
                alt={item.src}
              />
            </Carousel.Item>
          ))}
        </Carousel>


      </div>
      <div>
        <Posters />
      </div>
    </div>
  );
};

export default AboutProgram;
