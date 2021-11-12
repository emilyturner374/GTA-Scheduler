import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
//import AdminHomePage from './pages/AdminHomePage';
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
      <FormPage/>
      {/*<AdminHomePage/>*/}
    </Router>
  );
}

export default App;