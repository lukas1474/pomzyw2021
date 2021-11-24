import React, { useState, useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const data = [
    {
      id: 1,
      linkSrc: `#program`,
      linkName: `o Programie`,
      side: `L`,
    },
    {
      id: 2,
      linkSrc: `#punktypomocy`,
      linkName: `Punkty pomocy`,
      side: `L`,
    },
    {
      id: 3,
      linkSrc: `#`,
      linkName: `Menu3`,
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
