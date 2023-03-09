import React from 'react';
import '../styles/Footer.css'

function Footer() {
  return (
    <>
      <footer className="footer bg-dark text-white position-relative">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="preloader position-absolute bottom-0 right-0"></div>
              <div className="copyright-box">
                <p className="mb-0">
                  &copy;<strong> Hunter Mustain Productions</strong>.
                </p>
              </div>
              <div className="f-social-icons">
                <a href="https://www.facebook.com/hunter.mustain" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://twitter.com/huntermustain" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="https://github.com/hmustain" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/hunter-mustain-733980160/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
      </footer>
    </>
  );
}

export default Footer;
