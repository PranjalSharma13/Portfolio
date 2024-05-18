

import './App.css';
import Intro from './components/Intro';
import LanguageSwitcher from './components/languageSwitcher';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <Router>
    <div className="App">
      <LanguageSwitcher />
      <Routes>
        <Route path="/Portfolio" element={<Intro/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
