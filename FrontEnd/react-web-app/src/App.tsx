import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePageContent from './components/HomePage/HomePageContent';
import HomePageHeader from './components/HomePage/HomePageHeader';
import Worker from './components/Worker/Worker';
import CustomerHomepage from './components/Customer/CustomerHomepage';
import BusinessPage from './components/Business/BusinessPage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePageHeader} />
          <Route path="/Worker" component={Worker} />
          <Route path="/CustomerHomepage" component={CustomerHomepage} />
          <Route path="/BusinessPage" component={BusinessPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
