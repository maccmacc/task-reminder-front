import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import Blog from './views';

function App() {
  return (
    <BrowserRouter>
      <Blog />
    </BrowserRouter>
  );
}

export default App;
