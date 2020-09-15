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
          <Route exact path="/BusinessPage/:id" component={BusinessPage} />
          <Route exact path='/UserHomepage/:id' component={UserHomepage}/>
          <Route exact path="/BusinessPage/edit/:id" component={EditBusinessPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
