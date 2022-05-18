import styled from 'styled-components';

import { IconLogo } from '../../../icons';
import SearchBox from '../searchBox';
import Nav from './components/Nav';

function Header() {
  return (
    <Container>
      <IconLogo />
      <SearchBox shape="round" />
      <Nav />
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  padding: 0 20px;
  display: flex;
  //justify-content: space-between;
  align-items: center;
  font-size: 14px;
  svg{
    margin-right: 20px;
  }
`;

export default Header;
