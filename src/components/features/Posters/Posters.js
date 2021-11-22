import React, {useState,
  // useEffect, useRef
} from 'react';
import styles from './Posters.module.scss';

// import CloseIcon from '@mui/icons-material/Close';

import firstPoster from '../../../posters/pomzyw1.jpg';
import secondPoster from '../../../posters/pomzyw2.jpg';

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
  console.log('1', modal);

  const getImg = (imgSrc) => {
    setTempingSrc(imgSrc);
    setModal(true);
  };

  // const useOutsidePopup = (ref) => {
  //   useEffect(() => {
  //     function handleClickOutside(e) {
  //       if (ref.current && !ref.current.contains(e.target)) {
  //         setVisible(false);
  //       }
  //     }
  //     document.addEventListener(`mouseup`, handleClickOutside);
  //     return () => {
  //       document.removeEventListener(`mouseup`, handleClickOutside);
  //     };
  //   }, [ref]);
  // };
  // const popupRef = useRef(null);
  // useOutsidePopup(popupRef);

  return (
    <>
      <div>
        <h2>Plakaty</h2>
      </div>
      <div className={modal ? styles.modalOpen : styles.modal}>
        <img src={tempingSrc} alt='poster_modal'/>
        {/* <CloseIcon></CloseIcon> */}
      </div>
      <div className={styles.postersGallery}>
        {data.map((item, index) => {
          return(
            <div className={styles.posters} key={index}>
              <img src={item.imgSrc} alt='plakat' className={styles.poster} onClick={() => getImg(item.imgSrc)}/>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Posters;
