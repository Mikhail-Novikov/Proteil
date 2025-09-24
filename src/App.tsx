import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.less';
import Home from './pages/Home';
import ActionPbx from './pages/ActionPbx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pbx" element={<ActionPbx />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
