import Layout from './components/Layout';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import { ROUTE_CONSTANTS } from './components/core/utils/constants';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import UWC from './pages/Portfolio/UWC';
import TIC from './pages/Portfolio/TIC';
import IDeAoffice from './pages/Portfolio/IDeAoffice';
import FAST from './pages/Portfolio/FAST';

import './App.css';

function App() {
  return (

        <BrowserRouter>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Layout>
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
                </Layout>
              </Switch>   
        </BrowserRouter>

  );
}

export default App;
