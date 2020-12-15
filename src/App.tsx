import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Head from './components/head/Head';
import ApodPage from './pages/apodPage/ApodPage';
import ExoPage from './pages/exoPage/ExoPage';
import HomePage from './pages/homePage/HomePage';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Head />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/apod' component={ApodPage} />
        <Route path='/exoplanet' component={ExoPage} />
      </Switch>
    </div>
  );
};

export default App;
