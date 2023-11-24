import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Dashboard, SignIn, SignUp, Profile, Sidebar } from './components';


function App() {

  return (

    <React.Fragment>
      <Router>
        <>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<SignIn />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
        </>
      </Router>
    </React.Fragment>

  )
}

export default App;

