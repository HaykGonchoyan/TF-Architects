import Layout from './components/Layout';
import Portfolio from './pages/Portfolio';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Services from './pages/Services';
import { ROUTE_CONSTANTS } from './components/core/utils/constants';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import UWC from './pages/Portfolio/UWC';
import TIC from './pages/Portfolio/TIC';
import Marash from './pages/Portfolio/Marash';
import IDeAoffice from './pages/Portfolio/IDeAoffice';
import FAST from './pages/Portfolio/FAST';
import DiliTown from './pages/Portfolio/DiliTown';
import YEC from './pages/Portfolio/YEC';
import AboutUs from './pages/AboutUs';
import HotelComplex from './pages/Portfolio/HotelComplex';
import Ruby from './pages/Portfolio/Ruby';
import Steko from './pages/Portfolio/Steko';
import Dilitropic from './pages/Portfolio/Dilitropic';

import './App.css';

function App() {
  const language = {lang: 0}

  if (!Number(localStorage.lang)) {
    localStorage.lang = '0'
  }else{
    localStorage.lang = '1'
  }

  return (
        
        <BrowserRouter>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>

                <Layout language = {language}>
                
                <Route exact path={ROUTE_CONSTANTS.PORTFOLIO}>
                  <Portfolio />
                </Route>

                <Route path={ROUTE_CONSTANTS.PORTFOLIO + "/UWC"}>
                  <UWC />
                </Route>

                <Route path={ROUTE_CONSTANTS.PORTFOLIO + "/TIC"}>
                  <TIC />
                </Route>

                <Route path={ROUTE_CONSTANTS.PORTFOLIO + "/IDeA_office"}>
                  <IDeAoffice />
                </Route>

                <Route path={ROUTE_CONSTANTS.PORTFOLIO + "/FAST"}>
                  <FAST />
                </Route>

                <Route path={ROUTE_CONSTANTS.PORTFOLIO + "/Dilitown"}>
                  <DiliTown />
                </Route>

                <Route path={ROUTE_CONSTANTS.PORTFOLIO + "/Marash"}>
                  <Marash />
                </Route>

                <Route path={ROUTE_CONSTANTS.PORTFOLIO + "/Yeghvard_EC"}>
                  <YEC />
                </Route>

                <Route path={ROUTE_CONSTANTS.PORTFOLIO + "/HotelComplex"}>
                  <HotelComplex />
                </Route>

                <Route path={ROUTE_CONSTANTS.PORTFOLIO + "/Ruby"}>
                  <Ruby />
                </Route>

                <Route path={ROUTE_CONSTANTS.PORTFOLIO + "/Steko"}>
                  <Steko />
                </Route>

                <Route path={ROUTE_CONSTANTS.PORTFOLIO + "/Dilitropic"}>
                  <Dilitropic />
                </Route>



                <Route path={ROUTE_CONSTANTS.CONTACTS}>
                  <Contacts />
                </Route>

                <Route path={ROUTE_CONSTANTS.SERVICES}>
                  <Services />
                  </Route>

                <Route path={ROUTE_CONSTANTS.ABOUT_US}>
                  <AboutUs />
                </Route>

                </Layout>
              </Switch>   
        </BrowserRouter>

  );
}

export default App;
