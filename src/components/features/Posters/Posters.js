import React, {useState, useEffect, useRef} from 'react';
import styles from './Posters.module.scss';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import posters from '../../../data/posters.json';

const Posters = () => {
  const [modal, setModal] = useState(false);
  const [srcImg, setSrcImg] = useState('');

  const getImg = (imgSrc) => {
    setSrcImg(imgSrc);
    setModal(true);
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.overflow = `unset`;
    }
  }, [modal]);


  const posterRef = useRef(null);
  useEffect(() => {
    const posterItem = posterRef.current.children;
    gsap.set([posterItem], { autoAlpha: 0, x: -100 });
    ScrollTrigger.batch(posterItem, {
      start: `top bottom`,
      onEnter: (batch) =>
        gsap.to(batch, {
          autoAlpha: 1,
          x: 0,
          stagger: { each: 0.15 },
          overwrite: true,
        }),
    });
    ScrollTrigger.addEventListener(`refreshInit`, () =>
      gsap.set(posterItem, { x: 0 })
    );
  }, []);

  return (
    <div className={styles.root}>
      <div className={modal ? styles.modalOpen : styles.modal}>
        <img src={srcImg} alt='poster_modal'/>
        <span className={styles.icon} onClick={() => setModal(false)}>
          X
        </span>
      </div>
      <div className={styles.postersGallery} ref={posterRef}>
        {posters.map((item, index) => {
          return(
            <img key={index} src={item.miniImg} alt={item.alt} className={styles.poster}
              onClick={() => getImg(item.imgSrc)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posters;
