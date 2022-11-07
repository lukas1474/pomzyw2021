import React from 'react';
import styles from './MainLayout.module.scss';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

// eslint-disable-next-line react/prop-types
const MainLayout = ({children}) => {

  return (
    <div>
      <Header />
      <div className={styles.mainLayoutSections}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
