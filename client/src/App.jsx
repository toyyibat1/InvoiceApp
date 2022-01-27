import AddInvoice from "./components/AddInvoice";
import Invoices from "./components/Invoices";
import './App.css';
import React, {useState, Fragment} from 'react';
import {ClientDetails, Date, Footer, Header, MainDetails, Notes, Table, TableForm, api, SendModal} from "./components/index";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
   
    <Router>
      <Fragment>
        {/* <Navbar/> */}

        <Routes>
          <Route exact path='/' element={<AddInvoice/>}/>        
          <Route exact path='/invoices' element={<Invoices/>}/>
        </Routes>
      </Fragment>
    </Router>
  )
}

export default App

