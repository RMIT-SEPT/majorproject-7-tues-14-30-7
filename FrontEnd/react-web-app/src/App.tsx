import React from 'react';
import './App.scss';
import HomePageContent from './components/HomePage/HomePageContent';
import HomePageHeader from './components/HomePage/HomePageHeader';
import Worker from './components/Worker/Worker';
import CustomerHomepage from './components/Customer/CustomerHomepage';
<<<<<<< HEAD
<<<<<<< HEAD
import BusinessPage from './components/businessPage/BusinessPage';
=======
import BusinessPage from './components/Business/BusinessPage';
>>>>>>> origin/develop
=======
import BusinessPage from './components/businessPage/BusinessPage';

>>>>>>> 3ff3ce14cd38052bcfa4727328306a3a8a8f320e

function App() {
  return (
    <div>
      <HomePageHeader/>
      <HomePageContent/>
      <CustomerHomepage/>
      <Worker/>
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <CustomerHomepage/>
>>>>>>> origin/develop
=======
>>>>>>> 3ff3ce14cd38052bcfa4727328306a3a8a8f320e
      <BusinessPage/>
    </div>
  );
}

export default App;
