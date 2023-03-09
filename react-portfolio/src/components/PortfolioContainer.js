import React, { useState } from 'react';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Services from './Services';
import Navbar from './Navbar';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

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
      {/* // TODO: Add a comment describing what we are passing as props */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
    </div>
  );
}