import React from 'react';
// In react-router-dom v6, "Switch" has been replaced by "Routes".
// In react-router-dom v6, "Redirect" has been replaced by "Navigate".
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Navbar from './shared/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* exact prop is not supported in react-router-dom v6 anymore */}
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* If you want to redirect it to home use code commented below */}
        {/* <Route path="*" element={<Navigate replace to="/home" />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
