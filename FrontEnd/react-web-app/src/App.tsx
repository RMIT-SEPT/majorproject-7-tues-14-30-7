import React from 'react';
import './App.scss';
import Worker from './components/Worker/Worker';
import BusinessPage from './components/Business/BusinessPage';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import UserHomepage from './components/User/UserHomepage';
import HomePageContent from './components/HomePage/HomePageContent';
<<<<<<< HEAD


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePageContent} />
          <Route path="/Worker" component={Worker} />
          <Route path="/BusinessPage" component={BusinessPage} />
          <Route exact path='/UserHomepage/:id' component={UserHomepage}/>
        </Switch>
      </Router>
=======
import SearchPage from './components/Search/SearchPage'
import EditBusinessPage from './components/Business/EditBusinessPage'
import LoginPage from './components/Entry/LoginPage';
import RegisterPage from './components/Entry/RegisterPage';
import {Provider} from "react-redux";
import store from './store';
function App() {
  return (
    <div>
      <Provider store={store}>
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
            <Route path="/Login" component={LoginPage} />
            <Route path="/Signup" component={RegisterPage} />
          </Switch>
        </Router>
        </Provider>
>>>>>>> e6b53176a435306d2adf0a1202e581cbf77d77fb
    </div>
  );
}

export default App;
