import React, {useState, useEffect} from 'react';
import styles from './Posters.module.scss';

import CloseIcon from '@material-ui/icons/Close';

const Posters = () => {
  let data = [
    {
      id:1,
      imgSrc: '/images/poster1.webp',
      alt: `Plakat 1`,
    },
    {
      id:2,
      imgSrc: '/images/poster2.webp',
      alt: `Plakat 2`,
    },
  ];

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

  return (
    <div className={styles.root}>
      <div className={modal ? styles.modalOpen : styles.modal}>
        <img
          src={srcImg}
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
              alt={item.alt}
              className={styles.poster}
              onClick={() => getImg(item.imgSrc)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posters;
