import React, { useState, useEffect, useRef } from 'react';
import styles from './Navigation.module.scss';
import { Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { NavHashLink } from 'react-router-hash-link';
import { HamburgerSqueeze } from 'react-animated-burgers';
import navigation from '../../../data/navigation.json';

const Navigation = () => {
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

  const menuLinksRefL = useRef(null);
  const menuLinksRefR = useRef(null);
  const logoRef = useRef(null);

  const timeline = gsap.timeline({
    duration: 0.3,
    defaults: {
      ease: `Power3.easeOut`,
    },
  });
  useEffect(() => {
    const menuBackground = menuRef.current.children[1];
    const menuLogo = logoRef.current;
    const menuLinksL = menuLinksRefL.current.children;
    const menuLinksR = menuLinksRefR.current.children;
    gsap.set([menuBackground, menuLogo, menuLinksL, menuLinksR], { autoAlpha: 0});

    timeline
      .fromTo(
        menuBackground,
        { autoAlpha: 0, y: -100 },
        {
          autoAlpha: 1,
          y: 0,
        }
      ).fromTo(
        menuLogo,
        { autoAlpha: 0, y: -100 },
        {
          autoAlpha: 1,
          y: 0,
        },
        '-=0.3'
      )
      .fromTo(
        menuLinksL,
        { y: -100 },
        { autoAlpha: 1, y: 0, stagger: 0.1 },
        `<0.5`,
      ).fromTo(
        menuLinksR,
        { y: 0 },
        { autoAlpha: 1, y: 0, stagger: 0.1 },
        '-=0.2'
      );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const menuLinksL = menuLinksRefL.current.children;
    const menuLinksR = menuLinksRefR.current.children;
    if(activeRWD){
      gsap.set([menuLinksL, menuLinksR], { autoAlpha: 0, x: 100});
      timeline
        .fromTo(
          menuLinksL,
          { x: 100 },
          { autoAlpha: 1, x: 0, stagger: 0.1 },
          `<0.3`,
        ).fromTo(
          menuLinksR,
          { x: 100 },
          { autoAlpha: 1, x: 0, stagger: 0.1 },
          '-=0.2'
        );
    }
  }, [activeRWD]); // eslint-disable-line react-hooks/exhaustive-deps

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
          <div className="d-flex flex-column flex-xl-row" ref={menuLinksRefL}>
            {navigation
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
          <div className="d-flex flex-column flex-xl-row" ref={menuLinksRefR}>
            {navigation
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
      <div className={styles.circle} ref={logoRef}>
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
