import React from 'react';
import styles from '../Contact/Contact.module.scss';

import contact from '../../../data/contact.json';

import { Col, Row } from 'react-bootstrap';

const Contact = () => (
  <div className={styles.root} id="kontakt">
    <h2 className={styles.contactTitle}>{contact.title}</h2>
    <Row className={styles.contactContent}>
      <Col xs={12} sm={12} md={4} lg={4} className={styles.contactLogo}>
        <img className={styles.contactLogoImage} src="/images/logo-calatrava.webp" alt="Logo Program"/>
      </Col>
      <Col xs={12} sm={12} md={6} lg={5} className={styles.contactText}>
        <p className={styles.contactSubtitle}>{contact.titleChurch}</p>
        <p className={styles.contactSubtitle}>{contact.titleTreasurer}</p>
        <p className={styles.contactDetails}>{contact.contactAddressSubtitle}</p>
        <p className={styles.contactDetails}>{contact.contactAddress}</p>
        <a className={styles.contactDetails} href={`tel:${contact.contactTel}`}>{contact.contactTel}</a>
        <br/>
        <a className={styles.contactDetails} href={`mailto:${contact.contactMail}`}>{contact.contactMail}</a>
      </Col>
    </Row>
  </div>
);

export default Contact;
