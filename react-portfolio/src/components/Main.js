import React from 'react';
import '../styles/Main.css';

const MainContent = ({ children }) => {
  return (
    <main id="main">
      { children }
    </main>
  );
}

export default MainContent;
