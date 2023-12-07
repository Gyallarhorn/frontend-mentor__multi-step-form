import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle, ContentWrapper } from './globalStyles';
import Header from './Components/Header/Header';

function App() {
  return (
    <ContentWrapper>
      <GlobalStyle />
      <Header />
      <Outlet />
    </ContentWrapper>

  );
}

// Some text

export default App;
