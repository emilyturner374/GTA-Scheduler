import React from 'react';
import GtaListForm from '../components/Form'
import Header from '../components/Header';
import Titlebar from '../components/Titlebar';

function FormPage() {
    return(
      <div>
          <Header/>
          <Titlebar/>
          <GtaListForm/>
      </div>
    );
};

export default FormPage;