import React from 'react';
import { Outlet } from 'react-router-dom';
import StyledButton from './Styled';

function App() {
  return (
    <>
      <StyledButton>Hello</StyledButton>
      <Outlet />
    </>

  );
}

export default App;
