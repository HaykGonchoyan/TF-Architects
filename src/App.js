import Layout from './components/Layout';
import Portfolio from './pages/Portfolio';
import { ROUTE_CONSTANTS } from './components/core/utils/constants';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <RouterProvider
      router={
        createBrowserRouter(
          createRoutesFromElements(
            <Route path='/' element={<Layout />}>
                <Route path={ROUTE_CONSTANTS.PORTFOLIO} element={<Portfolio />} />
            </Route>
          )
        )
      }
    
    />
  );
}

export default App;
