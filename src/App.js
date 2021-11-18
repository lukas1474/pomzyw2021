import React from 'react';

import './styles/bootstrap.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Help from './components/views/Help/Help';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Help/>
      </MainLayout>
    </div>
  );
}

export default App;
