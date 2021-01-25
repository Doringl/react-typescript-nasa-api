import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Head from './components/head/Head';
import ApodPage from './pages/apodPage/ApodPage';
import HubblePage from './pages/hubblePage/HubblePage';
import HomePage from './pages/homePage/HomePage';
import ExpPage from './pages/expPage/ExpPage';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Head />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/apod' component={ApodPage} />
        <Route path='/hubble' component={HubblePage} />
        <Route path='/exp' component={ExpPage} />
      </Switch>
    </div>
  );
};

export default App;
