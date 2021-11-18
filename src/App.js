import React from 'react';
import'./styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Help from './components/views/Help/Help';

function App() {
  return (
    <div>
      <MainLayout>
        <Help/>
      </MainLayout>
    </div>
  );
}

export default App;
