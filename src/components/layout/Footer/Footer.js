import React from 'react';
import styles from '../Footer/Footer.module.scss';

import { Container, Row, Col } from 'react-bootstrap';

import contact from '../../../data/contact.json';

import SKlogo from '../../../posters/logo-starokatolicki.webp';
import programLogo from '../../../posters/programLogo.webp';

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <Row className={styles.footerRow}>
        <Col className={styles.logo}>
          <Col className={styles.logoDetails}>
            <img className={styles.SKlogo} src={SKlogo} alt='Starokatolicki' />
          </Col>
          <Col className={styles.logoDetails}>
            <img className={styles.programLogo} src={programLogo} alt='Program logo' />
          </Col>
        </Col>
        <Col className={styles.contactText}>
          <h2>Kontakt:</h2>
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
