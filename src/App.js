import React from 'react';

import Routes from './routes';
import { TestProvider } from './contexts/testContext';
import './assets/styles/global.css';

function App() {
  return (
    <>
      <TestProvider>
        <Routes />
      </TestProvider>
    </>
  );
}

export default App;
