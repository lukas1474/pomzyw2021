import React from 'react';
import styles from '../Footer/Footer.module.scss';

import { Container, Row, Col } from 'react-bootstrap';

import contact from '../../../data/contact.json';

const Footer = () => (
  <footer className={styles.footer} id="kontakt">
    <Container>
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
          <h2 className={styles.contactHead}>Kontakt:</h2>
          <h3 className={styles.contactTitle}>{contact.title}</h3>
          <p className={styles.contactDetails}>{contact.address}</p>
          <p className={styles.contactDetails}>{contact.tel}</p>
          <p className={styles.contactDetails}>{contact.mail}</p>
        </Col>
      </Row>
    </Container>
    <p className={styles.textFooter}>2021</p>
  </footer>
);

export default Footer;
