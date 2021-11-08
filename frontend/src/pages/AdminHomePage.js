import React from 'react';
import Header from '../components/Header';
import Titlebar from '../components/Titlebar';
import Toolbar from '../components/Toolbar';
import CalendarDisplay from '../components/Calendar/CalendarDisplay';

function AdminHomePage() {
  return(
    <div>
        <Header/>
        <Titlebar/>
        <Toolbar/>
        <CalendarDisplay/>
    </div>
  );
};

export default AdminHomePage;