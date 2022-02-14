import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './styles/bootstrap.scss';
import'./styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import MainPage from './components/views/MainPage/MainPage';
import NotFound from './components/views/NotFound/NotFound';

import { db } from './firebase';
import { collection, getDocs } from '@firebase/firestore';

export const DataContext = React.createContext('');

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const [aboutProgramData, setAboutProgramData] = useState([]);
  const [programPartnersData, setProgramPartnersData] = useState([]);
  const [aboutUsData, setAboutUsData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [mainCoordinator, setMainCoordinator] = useState([]);
  const [coordinators, setCoordinators] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [navigation, setNavigation] = useState([]);
  const [posters, setPosters] = useState([]);
  const [programName, setProgramName] = useState([]);

  const aboutProgramDataRef = collection(db, 'aboutProgram');
  const programPartnersDataRef = collection(db, 'programPartners');
  const aboutUsDataRef = collection(db, 'aboutUs');
  const contactDataRef = collection(db, 'contact');
  const mainCoordinatorDataRef = collection(db, 'mainCoordinator');
  const coordinatorsDataRef = collection(db, 'coordinators');
  const foodListDataRef = collection(db, 'foodList');
  const navigationDataRef = collection(db, 'navigation');
  const postersDataRef = collection(db, 'posters');
  const programNameDataRef = collection(db, 'programName');

  // console.log(
  //   'z nowej',
  //   aboutProgramData,
  //   aboutUsData,
  //   programPartnersData,
  //   contactData,
  //   mainCoordinator,
  //   coordinators,
  //   foodList,
  //   navigation,
  //   posters,
  //   programName
  // );

  useEffect(() => {
    const getAboutProgram = async () => {
      const data = await getDocs(aboutProgramDataRef);
      setAboutProgramData(data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })));
    };

    const getProgramPartners = async () => {
      const data = await getDocs(programPartnersDataRef);
      setProgramPartnersData(data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })));
    };

    const getAboutUs = async () => {
      const data = await getDocs(aboutUsDataRef);
      setAboutUsData(data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })));
    };

    const getContact = async () => {
      const data = await getDocs(contactDataRef);
      setContactData(data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })));
    };

    const getMainCoordinator = async () => {
      const data = await getDocs(mainCoordinatorDataRef);
      setMainCoordinator(data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })));
    };

    const getCoordinators = async () => {
      const data = await getDocs(coordinatorsDataRef);
      setCoordinators(data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })));
    };

    const getFoodList = async () => {
      const data = await getDocs(foodListDataRef);
      setFoodList(data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })));
    };

    const getNavigation = async () => {
      const data = await getDocs(navigationDataRef);
      setNavigation(data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })));
    };

    const getPosters = async () => {
      const data = await getDocs(postersDataRef);
      setPosters(data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })));
    };

    const getProgramName = async () => {
      const data = await getDocs(programNameDataRef);
      setProgramName(data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })));
    };

    getAboutProgram();
    getProgramPartners();
    getAboutUs();
    getContact();
    getMainCoordinator();
    getCoordinators();
    getFoodList();
    getNavigation();
    getPosters();
    getProgramName();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <BrowserRouter>
        <MainLayout>
          <DataContext.Provider
            value={{
              aboutProgramData,
              aboutUsData,
              programPartnersData,
              contactData,
              mainCoordinator,
              coordinators,
              foodList,
              navigation,
              posters,
              programName,
            }}>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="*" component={NotFound} />
            </Switch>
          </DataContext.Provider>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
