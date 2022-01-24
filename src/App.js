import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/bootstrap.scss';
import'./styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import MainPage from './components/views/MainPage/MainPage';
import NotFound from './components/views/NotFound/NotFound';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <div>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
