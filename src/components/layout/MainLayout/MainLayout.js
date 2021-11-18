import React from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

// eslint-disable-next-line react/prop-types
const MainLayout = ({children}) => {

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
