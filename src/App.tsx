import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.less';
import Home from './pages/Home';
import ActionPbx from './pages/ActionPbx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pbx" element={<ActionPbx />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
