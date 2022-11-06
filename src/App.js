import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ReactGA from 'react-ga4';
import './styles/bootstrap.scss';
import'./styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import MainPage from './components/views/MainPage/MainPage';
import Announcements from './components/views/Announcements/Announcements';
import NotFound from './components/views/NotFound/NotFound';
import ScrollToTop from './components/utils/ScrollToTop';
import Gdpr from './components/infoPages/Gdpr/Gdpr';

function App() {

  useEffect(() => {
    const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_API_KEY;
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({ hitType: 'pageview'});
  }, []);

  gsap.registerPlugin(ScrollTrigger);
  return (
    <div>
      <Router>
        <MainLayout>
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/ogloszenia" component={Announcements} />
            <Route exact path="/rodo" component={Gdpr} />
            <Route path="*" component={NotFound} />
          </Switch>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
