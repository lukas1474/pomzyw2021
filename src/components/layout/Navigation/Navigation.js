import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';
import styles from './Navigation.module.scss';
import { style } from 'dom-helpers';

const Component = ({ className, children }) => {
  const [scroll, setScroll] = useState(false);

  function scrollFunction() {
    if (
      document.documentElement.scrollTop >
        50
    ) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={!scroll ? styles.root: styles.rootScroll}>
      <div className={styles.background}>
      </div>
      <div className={`${styles.menu} ${styles.menuL}`}>
        <p>Menu1</p>
        <p>Menu2</p>
        <p>Menu3</p>
      </div>
      <div className={styles.circle}>
        <div className={styles.logo}>
          <p>logo</p>
        </div>
      </div>
      <div className={`${styles.menu} ${styles.menuR}`}>
        <p>Menu4</p>
        <p>Menu5</p>
        <p>Menu6</p>
      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Navigation, Component as NavigationComponent };
