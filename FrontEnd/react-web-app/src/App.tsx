import React from 'react';
import './App.scss';
import HomePageContent from './components/HomePage/HomePageContent';
import HomePageHeader from './components/HomePage/HomePageHeader';
import Worker from './components/Worker/Worker';
import CustomerHomepage from './components/Customer/CustomerHomepage';
<<<<<<< HEAD
import BusinessPage from './components/businessPage/BusinessPage';
=======
import BusinessPage from './components/Business/BusinessPage';
>>>>>>> origin/develop

function App() {
  return (
    <div>
      <HomePageHeader/>
      <HomePageContent/>
      <CustomerHomepage/>
      <Worker/>
<<<<<<< HEAD
=======
      <CustomerHomepage/>
>>>>>>> origin/develop
      <BusinessPage/>
    </div>
  );
}

export default App;
