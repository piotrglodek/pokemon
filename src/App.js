import React from 'react';
import Providers from './Providers';
import Routes from './Routes';
// FIXME: useQiery DevTools
import { ReactQueryDevtools } from 'react-query-devtools';

function App() {
  return (
    <Providers>
      <Routes />
      <ReactQueryDevtools />
    </Providers>
  );
}

export default App;
