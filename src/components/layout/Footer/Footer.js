import React from 'react';
import styles from '../Footer/Footer.module.scss';

import { Row, Col } from 'react-bootstrap';

import contact from '../../../data/contact.json';

const Footer = () => (
  <footer className={styles.root} id="kontakt">
    <Row className={styles.footerRow}>
      <Col className={styles.logo}>
        <Col className={styles.logoDetails}>
          <img className={styles.SKlogo} src="/images/logo-starokatolicki__black.webp" alt='Logo Starokatolicki' />
        </Col>
        <Col className={styles.logoDetails}>
          <img className={styles.programLogo} src="/images/logo-calatrava.webp" alt='Logo Program' />
        </Col>
      </Col>
      <Col className={styles.contactText}>
        <h3 className={styles.contactTitle}>{contact.title}</h3>
        <p className={styles.contactDetails}>{contact.address}</p>
        <p className={styles.contactDetails}>{contact.tel}</p>
        <p className={styles.contactDetails}>{contact.mail}</p>
      </Col>
    </Row>
    <div className={styles.yearBox}>
      <h6 className={styles.textFooter}>2021</h6>
    </div>
  </footer>
);

export default Footer;
