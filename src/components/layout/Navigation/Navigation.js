import React, { useState, useEffect } from 'react';
import styles from './Navigation.module.scss';

import { NavHashLink } from 'react-router-hash-link';

const Navigation = () => {
  const data = [
    {
      id: 1,
      linkSrc: `#oNas`,
      linkName: `o nas`,
      side: `L`,
    },
    {
      id: 2,
      linkSrc: `#oProgramie`,
      linkName: `o programie`,
      side: `L`,
    },
    {
      id: 3,
      linkSrc: `#punktyPomocy`,
      linkName: `punkty pomocy`,
      side: `R`,
    },
    {
      id: 4,
      linkSrc: `#kontakt`,
      linkName: `kontakt`,
      side: `R`,
    },
  ];

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

  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: `smooth` });
  };

  return (
    <div className={!scroll ? styles.root : styles.rootScroll}>
      <div className={styles.background}>
      </div>
      <div className={`${styles.menu} ${styles.menuL}`}>
        {data
          .filter((item) => item.side === `L`)
          .map((item) => (
            <NavHashLink
              key={item.id}
              smooth
              to={`/${item.linkSrc}`}
              scroll={(el) => scrollWidthOffset(el)}
            >
              {item.linkName}
            </NavHashLink>
          ))}
      </div>
      <div className={styles.circle}>
        <div className={styles.logo}>
          <NavHashLink
            smooth
            to={`/#`}
            scroll={(el) => scrollWidthOffset(el)}
            className={styles.navLink}
          >
            <img src="/images/logo.svg" alt="Logo" />
          </NavHashLink>
        </div>
      </div>
      <div className={`${styles.menu} ${styles.menuR}`}>
        {data
          .filter((item) => item.side === `R`)
          .map((item) => (
            <NavHashLink
              key={item.id}
              smooth
              to={`/${item.linkSrc}`}
              scroll={(el) => scrollWidthOffset(el)}
            >
              {item.linkName}
            </NavHashLink>
          ))}
      </div>
    </div>
  );
};


export default Navigation;
