import React from 'react';
import styles from '../Footer/Footer.module.scss';

import {Row, Col} from 'react-bootstrap';

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
        <h3 className={styles.contactTitle}>{contact.title1}</h3>
        <h4 className={styles.contactTitle}>{contact.title2}</h4>
        <p className={styles.contactDetails}>{contact.address1}</p>
        <p className={styles.contactDetails}>{contact.address2}</p>
        <a className={styles.contactDetails} href={`tel:${contact.tel}`}>{contact.tel}</a>
        <a className={styles.contactDetails} href={`mailto:${contact.mail}`}>{contact.mail}</a>
      </Col>
    </Row>
    <div className={styles.yearBox}>
      <h6 className={styles.textFooter}>© 2021 Powered by </h6>
      <a href="mailto:crucialfix@outlook.com">CrucialFix</a>
    </div>
  </footer>
);

export default Footer;
