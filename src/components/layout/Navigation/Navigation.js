import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { NavHashLink } from 'react-router-hash-link';
import styles from './Navigation.module.scss';

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

  // const scrollWidthOffset = (el) => {
  //   const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  //   const yOffset = 1;
  //   window.scrollTo({ top: yCoordinate + yOffset, behavior: `smooth` });
  // };

  return (
    <div className={!scroll ? styles.root: styles.rootScroll}>
      <div className={styles.background}>
      </div>
      <div className={`${styles.menu} ${styles.menuL}`}>
        {/* <NavHashLink
          smooth
          to={`#`}
          scroll={(el) => scrollWidthOffset(el)}
          className={styles.navLink}
        >
        </NavHashLink> */}
        <p>Menu1</p>
        <p>Menu2</p>
        <p>Menu3</p>
      </div>
      <div className={styles.circle}>
        <div className={styles.logo}>
          <img src="/images/logo.svg" alt="Logo" />
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
