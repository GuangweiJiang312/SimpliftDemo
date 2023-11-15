import React, { useState } from 'react';
import VisualText from './components/VisualText';
import Background from './components/Background';
import HowTo from './components/HowTo';
import Method from './components/Method';
import './App.css';

const App = () => {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const previousPage = () => {
    setPage((currentPage) => currentPage - 1); 
  };

  const getPageComponent = () => {
    switch (page) {
      case 0:
        return <Background nextPage={nextPage} />;
      case 1:
	return <HowTo nextPage={nextPage} previousPage={previousPage} />;
      case 2:
        return <VisualText nextPage={nextPage} previousPage={previousPage}/>;
      case 3:
        return <Method previousPage={previousPage}/>;
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
