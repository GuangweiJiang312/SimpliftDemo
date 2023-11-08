import React, { useState } from 'react';
import VisualText from './components/VisualText';
import Background from './components/Background';
import './App.css';

const App = () => {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const previousPage = () => {
    setPage(0); // Change the page state back to 0 to show the Background component
  };

  const getPageComponent = () => {
    switch (page) {
      case 0:
        return <Background nextPage={nextPage} />;
      case 1:
        return <VisualText previousPage={previousPage}/>;
      default:
        return <Background nextPage={nextPage} />;
    }
  };

  return (
    <div className="app-container">
      {getPageComponent()}
    </div>
  );
};

export default App;