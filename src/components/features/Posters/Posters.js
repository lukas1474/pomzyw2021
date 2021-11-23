import React, {useState, useEffect} from 'react';
import styles from './Posters.module.scss';

import CloseIcon from '@material-ui/icons/Close';

import firstPoster from '../../../posters/pomzyw1.webp';
import secondPoster from '../../../posters/pomzyw2.webp';

const Posters = () => {
  let data = [
    {
      id:1,
      imgSrc: firstPoster,
    },
    {
      id:2,
      imgSrc: secondPoster,
    },
  ];

  const [modal, setModal] = useState(false);
  const [tempingSrc, setTempingSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempingSrc(imgSrc);
    setModal(true);
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.overflow = `unset`;
    }
  }, [modal]);

  return (
    <>
      <div>
        <h2>Plakaty</h2>
      </div>
      <div className={modal ? styles.modalOpen : styles.modal}>
        <img
          src={tempingSrc}
          alt='poster_modal'
        />
        <CloseIcon
          className={styles.icon}
          onClick={() => setModal(false)}
        />
      </div>
      <div className={styles.postersGallery}>
        {data.map((item, index) => {
          return(
            <img
              key={index}
              src={item.imgSrc}
              alt='plakat'
              className={styles.poster}
              onClick={() => getImg(item.imgSrc)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Posters;
