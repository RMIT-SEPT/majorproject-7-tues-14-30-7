import React from 'react';
import './App.scss';
import HomePageHeader from './components/HomePage/HomePageHeader';
import Worker from './components/Worker/Worker';
import BusinessPage from './components/Business/BusinessPage';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import UserHomepage from './components/User/UserHomepage';
import HomePageContent from './components/HomePage/HomePageContent';
import SearchPage from './components/Search/SearchPage'
import EditBusinessPage from './components/Business/EditBusinessPage'

function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePageContent} />
            <Route path="/Worker" component={Worker} />
            <Route exact path='/UserHomepage/:id' component={UserHomepage}/>
            <Route path="/BusinessPage" component={BusinessPage} />
            <Route exact path="/BusinessPage/:id" render={(props) => <BusinessPage {...props}/>}/>
            <Route path="/BusinessPage/edit/:id" render={(props) => <EditBusinessPage {...props}/>}/>
            <Route path="/Search/:searchid" render={(props) => <SearchPage {...props}/> } />
            <Route path="/Search" component={SearchPage} /> 
          </Switch>
        </Router>
    </div>
  );
}

export default App;
