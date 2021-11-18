import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import AdminHomePage from './pages/AdminHomePage';
import FormPage from './pages/FormPage';

function App() {

  return(
    <Router>
      <div>
        {/*Removes margins around outer edges of webpage*/}
        <style jsx global>{`
          body {
            margin: 0px;
            padding: 0px;
          }
        `}</style>
      </div>
      
      <Routes>
        <Route exact path='/' element={<AdminHomePage/>}/>
        <Route path='/form' element={<FormPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;