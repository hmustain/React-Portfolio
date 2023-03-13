import React from 'react';
import "../styles/Navbar.css";


function Navbar({ currentPage, handlePageChange }) {
    return (
      <header id="header" className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top py-4">
          <div className="container justify-content-center">
          <a class="navbar-brand" href="/">Hunter Mustain</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#home" onClick={() => handlePageChange('About')}>Home</a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#about" onClick={() => handlePageChange('About')}>About</a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="#projects" onClick={() => handlePageChange('Projects')}>Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact"onClick={() => handlePageChange('Contact')}>Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services" onClick= {()=> handlePageChange('Services')}>Resume</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
  
  export default Navbar;
