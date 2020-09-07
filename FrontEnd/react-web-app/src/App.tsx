import React from 'react';
import './App.scss';
import Worker from './components/Worker/Worker';
import CustomerHomepage from './components/Customer/CustomerHomepage';
import BusinessPage from './components/Business/BusinessPage';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import HomePageContent from './components/HomePage/HomePageContent';



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePageContent} />
          <Route path="/Worker" component={Worker} />
          <Route path="/CustomerHomepage" component={CustomerHomepage} />
          <Route path="/BusinessPage" component={BusinessPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
