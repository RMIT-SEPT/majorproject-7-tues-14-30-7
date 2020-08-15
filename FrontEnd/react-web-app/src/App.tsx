import React from 'react';
import './App.scss';
import HomePageContent from './components/HomePage/HomePageContent';
import HomePageHeader from './components/HomePage/HomePageHeader';

function App() {
  return (
    <div>
      <HomePageHeader/>
      <HomePageContent/>
    </div>
  );
}

export default App;
