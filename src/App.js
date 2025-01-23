import Layout from './components/Layout';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import { ROUTE_CONSTANTS } from './components/core/utils/constants';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <RouterProvider
      router={
        createBrowserRouter(
          createRoutesFromElements(
            <>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path={ROUTE_CONSTANTS.PORTFOLIO} element={<Layout><Portfolio /></Layout>} />
            </>
          )
        )
      }
    
    />
  );
}

export default App;
