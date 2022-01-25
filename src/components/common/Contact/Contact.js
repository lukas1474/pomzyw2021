import React, {useEffect, useRef} from 'react';
import styles from '../Contact/Contact.module.scss';
import { Col, Row } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import contact from '../../../data/contact.json';


const Contact = () => {
  const contactRef = useRef(null);
  useEffect(() => {
    const posterItem = contactRef.current.children;
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
    <div className={styles.root} id="kontakt" ref={contactRef}>
      <h2 className={styles.contactTitle}>{contact.title}</h2>
      <Row className={styles.contactContent}>
        <Col xs={12} sm={12} md={4} lg={4} className={styles.contactLogo}>
          <img className={styles.contactLogoImage} src="/images/kalatrawa.svg" alt="Logo Zakonu"/>
        </Col>
        <Col xs={12} sm={12} md={6} lg={5} className={styles.contactText}>
          <p className={styles.contactSubtitle}>{contact.titleChurch}</p>
          <p className={styles.contactSubtitle}>{contact.titleTreasurer}</p>
          <p className={styles.contactDetails}>{contact.contactAddressSubtitle}</p>
          <p className={styles.contactDetails}>{contact.contactAddress}</p>
          <a className={styles.contactDetails} href={`tel:${contact.contactTel}`}>{contact.contactTel}</a>
          <br/>
          <a className={styles.contactDetails} href={`mailto:${contact.contactMail}`}>{contact.contactMail}</a>
          <br/>
          <a href="https://www.starokatolicki.eu/" className={styles.textFooter}>www.starokatolicki.eu</a>
        </Col>
      </Row>
    </div>
  );};

export default Contact;
