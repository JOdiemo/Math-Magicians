import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/NavBar';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quotes" element={<Quote />} exact />
          <Route path="/calculator" element={<Calculator />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
