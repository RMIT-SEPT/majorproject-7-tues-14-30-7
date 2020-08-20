import React from 'react';
import './App.scss';
import HomePageContent from './components/HomePage/HomePageContent';
import HomePageHeader from './components/HomePage/HomePageHeader';

import Worker from './components/Worker/Worker';

function App() {
  return (
    <div>
      <HomePageHeader/>
      <HomePageContent/>
      <Worker/>
    </div>
   <div>
     <Homepage/>
   </div>
  );
}

export default App;
