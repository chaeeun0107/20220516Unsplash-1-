import styled from 'styled-components';

import React from 'react';

import { GlobalStyle } from './style/GlobalStyle';
import Header from './views/shared/header';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
    </Container>
  );
}

const Container = styled.div`

`;

export default App;
