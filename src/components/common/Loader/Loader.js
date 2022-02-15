import React, { useEffect } from 'react';
import styles from './Loader.module.scss';
import { Default } from 'react-spinners-css';

const Loader = () => {
  useEffect(() => {
    document.body.style.overflow = `hidden`;
    return () => (document.body.style.overflow = `unset`);
  }, []);
  return (
    <Default color="#f8af20" />
  );
};

export default Loader;
