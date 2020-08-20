import React from 'react';
import './App.scss';
import HomePageContent from './components/HomePage/HomePageContent';
import HomePageHeader from './components/HomePage/HomePageHeader';
import Worker from './components/Worker/Worker';
import CustomerHomepage from './components/Customer/CustomerHomepage';
import BusinessPage from './components/Business/BusinessPage';

function App() {
  return (
    <div>
      <HomePageHeader/>
      <HomePageContent/>
      <Worker/>
      <CustomerHomepage/>
      <BusinessPage/>
    </div>
  );
}

export default App;
