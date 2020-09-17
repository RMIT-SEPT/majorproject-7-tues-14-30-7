import React from 'react';
import './App.scss';
import Worker from './components/Worker/Worker';
import BusinessPage from './components/Business/BusinessPage';
import UserHomepage from './components/User/UserHomepage';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import HomePageContent from './components/HomePage/HomePageContent';
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
            <Route path="/" exact component={HomePageContent} />
            <Route path="/Worker" component={Worker} />
            <Route path="/BusinessPage" component={BusinessPage} />
            <Route path="/Login" component={LoginPage} />
            <Route path="/Signup" component={RegisterPage} />
            <Route exact path='/UserHomepage/:id' component={UserHomepage}/>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
