import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePageHeader from './components/HomePage/HomePageHeader';
import Worker from './components/Worker/Worker';
import BusinessPage from './components/Business/BusinessPage';
import UserHomepage from './components/Customer/UserHomepage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePageHeader} />
          <Route path="/Worker" component={Worker} />
          <Route path="/BusinessPage" component={BusinessPage} />
          <Route exact path='/UserHomepage/:id' component={UserHomepage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
