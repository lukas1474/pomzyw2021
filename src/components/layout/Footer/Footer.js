import React from 'react';
import styles from '../Footer/Footer.module.scss';

import {Row, Col} from 'react-bootstrap';

import footer from '../../../data/footer.json';

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
        <h3 className={styles.contactTitle}>{footer.titleChurch}</h3>
        <h4 className={styles.contactTitle}>{footer.titleTreasurer}</h4>
        <p className={styles.contactDetails}>{footer.footerAddressSubtitle}</p>
        <p className={styles.contactDetails}>{footer.footerAddress}</p>
        <a className={styles.contactDetails} href={`tel:${footer.footerTel}`}>{footer.footerTel}</a>
        <a className={styles.contactDetails} href={`mailto:${footer.footerMail}`}>{footer.footerMail}</a>
      </Col>
    </Row>
    <div className={styles.yearBox}>
      <h6 className={styles.textFooter}>© 2021 Powered by </h6>
      <a href="mailto:crucialfix@outlook.com">CrucialFix</a>
    </div>
  </footer>
);

export default Footer;
