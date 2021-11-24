import React from 'react';
import'./styles/global.scss';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Redirect } from 'react-router';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Help from './components/views/Help/Help';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Help} />
            <Redirect  from='/#/users' to={'/users'} />

          </Switch>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
