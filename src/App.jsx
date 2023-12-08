import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle, ContentWrapper } from './globalStyles';
import Header from './Components/Header/Header';
import { DataProvider } from './DataContext';

function App() {
  return (
    <DataProvider>
      <ContentWrapper>
        <GlobalStyle />
        <Header />
        <Outlet />
      </ContentWrapper>
    </DataProvider>

  );
}

// Some text

export default App;
