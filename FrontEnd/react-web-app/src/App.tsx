import React from 'react';
import './App.scss';
import HomePageHeader from './components/HomePage/HomePageHeader';
import Worker from './components/Worker/Worker';
import BusinessPage from './components/Business/BusinessPage';
import UserHomepage from './components/User/UserHomepage';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import HomePageContent from './components/HomePage/HomePageContent';
import EditBusinessPage from './components/Business/EditBusinessPage'
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePageContent} />
          <Route path="/Worker" component={Worker} />
          <Route exact path="/BusinessPage/:id" render={(props) => <BusinessPage {...props}/>}/>
          <Route path="/BusinessPage/edit/:id" render={(props) => <EditBusinessPage {...props}/>}/>
          <Route exact path='/UserHomepage/:id' component={UserHomepage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
