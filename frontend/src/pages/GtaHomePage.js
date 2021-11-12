import React from 'react';
import Header from '../components/Header';
import Titlebar from '../components/Titlebar';
import CalendarDisplay from '../components/Calendar/CalendarDisplay';


function GtaHomePage() {
  
  return(
    <div>
        <Header/>
        <Titlebar/>
        <CalendarDisplay/>
    </div>
  );
};

export default GtaHomePage;