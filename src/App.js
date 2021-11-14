import React from 'react';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';
import './App.css';

// This app is going to be deployed with the power of heroku.
function App() {
  return (
    <>
    <div>
    <Header/>
    </div>
     <div>
         <TinderCards/>
     </div>

     <SwipeButtons/>
      
  
 
    </>
  )
}

export default App


