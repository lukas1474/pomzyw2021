import React, { useState, useEffect, useRef } from 'react';
import styles from './Navigation.module.scss';
import { Col } from 'react-bootstrap';

import { NavHashLink } from 'react-router-hash-link';
import { HamburgerSqueeze } from 'react-animated-burgers';

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
  const [activeRWD, setActiveRWD] = useState(false);



  function scrollFunction() {
    if (window.innerWidth >= 1200) {
      if (
        document.documentElement.scrollTop >
        50
      ) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }
  }

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const useOutsideMenu = (ref) => {
    useEffect(() => {
      function handleClickOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          setActiveRWD(false);
        }
      }
      document.addEventListener(`mousedown`, handleClickOutside);
      return () => {
        document.removeEventListener(`mousedown`, handleClickOutside);
      };
    }, [ref]);
  };
  const menuRef = useRef(null);
  useOutsideMenu(menuRef);

  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: `smooth` });
  };

  //TODO dodać po naprawieniu błędu ze zbyt szerokim ekranem przy włączonym blur

  // const mainPage = document.getElementById(`mainPage`);
  // const splash = document.getElementById(`splash`);
  // const footer = document.getElementById(`kontakt`);

  // useEffect(() => {
  //   if (mainPage) {
  //     if (activeRWD) {
  //       for (let index = 0; index < mainPage.children.length; index++) {
  //         mainPage.children[index].setAttribute(`style`, `filter: blur(4px)`);
  //       }
  //       splash.setAttribute(`style`, `filter: blur(4px)`);
  //       footer.setAttribute(`style`, `filter: blur(4px)`);

  //       document.body.style.overflow = `hidden`;
  //     } else {
  //       for (let index = 0; index < mainPage.children.length; index++) {
  //         mainPage.children[index].setAttribute(`style`, `filter: blur(0px)`);
  //       }
  //       splash.setAttribute(`style`, `filter: blur(0px)`);
  //       footer.setAttribute(`style`, `filter: blur(0px)`);
  //       document.body.style.overflowY = `unset`;
  //     }
  //   }
  // });

  return (
    <nav className={scroll ? styles.root : styles.rootScroll} ref={menuRef}
    >
      <HamburgerSqueeze
        className={styles.burgerButton}
        id="burgerButton"
        isActive={activeRWD}
        onClick={() => setActiveRWD(!activeRWD)}
      />
      <div className={styles.background} />
      <div className={activeRWD ? styles.menu : styles.menu__hidden}>
        <Col className="col-12 col-xl-5">
          <div className="d-flex flex-column flex-xl-row">
            {data
              .filter((item) => item.side === `L`)
              .map((item) => (
                <Col key={item.id} className="p-3 p-xl-0">
                  <NavHashLink
                    smooth
                    className={styles.navLink}
                    to={`/${item.linkSrc}`}
                    scroll={(el) => scrollWidthOffset(el)}
                    onClick={() => setActiveRWD(false)}
                  >
                    {item.linkName}
                  </NavHashLink>
                </Col>
              ))}
          </div>
        </Col>
        <Col className="col-12 col-xl-5 offset-xl-2">
          <div className="d-flex flex-column flex-xl-row">
            {data
              .filter((item) => item.side === `R`)
              .map((item) => (
                <Col key={item.id} className="p-3 p-xl-0">
                  <NavHashLink
                    smooth
                    className={styles.navLink}
                    to={`/${item.linkSrc}`}
                    scroll={(el) => scrollWidthOffset(el)}
                    onClick={() => setActiveRWD(false)}
                  >
                    {item.linkName}
                  </NavHashLink>
                </Col>
              ))}
          </div>
        </Col>
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
    </nav>
  );
};

export default Navigation;



