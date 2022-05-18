import styled from 'styled-components';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './style/GlobalStyle';
import Main from './views/pages/main';
import Search from './views/pages/search';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Main />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/s/photos/:id" element={<Search />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`

`;

export default App;
