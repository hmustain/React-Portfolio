// We import useState and useEffect in our component
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/Main';
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <MainContent />
        <About />
      </main>
    </div>
  );
}

export default App;

