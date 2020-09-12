import React from 'react';
import './App.scss';
import Worker from './components/Worker/Worker';
import CustomerHomepage from './components/Customer/CustomerHomepage';
import BusinessPage from './components/Business/BusinessPage';
import { BrowserRouter as Router,Switch,Route, BrowserRouter } from "react-router-dom";
import HomePageContent from './components/HomePage/HomePageContent';
import SearchPage from './components/Search/SearchPage'


function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePageContent} />
            <Route path="/Worker" component={Worker} />
            <Route path="/CustomerHomepage" component={CustomerHomepage} />
            <Route path="/BusinessPage" component={BusinessPage} />
            <Route path="/Search" component={SearchPage} /> 
          </Switch>
        </Router>
    </div>
  );
}

export default App;
