// We import useState and useEffect in our component
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/Main';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <MainContent />
        <About />
        <Services />
      </main>
    </div>
  );
}

export default App;

