// We import useState and useEffect in our component
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/Main';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
      if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Services') {
          return <Services />;
        }
        if (currentPage === 'Projects') {
          return <Projects />;
        }
        return <Contact />;
  };
  
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        <MainContent >
        {renderPage()}
        </MainContent>
    </div>
  );
}

export default App;

