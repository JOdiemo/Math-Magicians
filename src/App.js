import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
// import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes" element={<Quote />} exact />
        <Route path="/calculator" element={<Calculator />} exact />
      </Routes>
    </div>
  );
}

export default App;
