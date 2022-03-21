import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/bootstrap.scss';
import'./styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import MainPage from './components/views/MainPage/MainPage';
import Announcements from './components/views/Announcements/Announcements';
import NotFound from './components/views/NotFound/NotFound';

function App() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div>
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/ogloszenia" component={Announcements} />
            <Route path="*" component={NotFound} />
          </Switch>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
