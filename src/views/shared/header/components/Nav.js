import styled from 'styled-components';

import { IconMenu } from '../../../../icons';

function Nav() {
  return (
    <Container>
      <LeftMenu>
        <div className="tap">
          <p>Explore</p>
          <p>Advertise</p>
          <p>Blog</p>
        </div>
        <div className="line" />
      </LeftMenu>
      <RightMenu>
        <div className="LogIn">
          <p>
            Log in
          </p>
          /
          <p>
            Sign up
          </p>
        </div>
        <Button className="submit">
          Submit a photo
        </Button>
      </RightMenu>
      <Button className="icon">
        <IconMenu />
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  color: #767676;

`;

const LeftMenu = styled.div`
  display: flex;
  align-items: center;


  p {
    padding: 20px 12px;
  }

  .tap {
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  .line {
    border-right: 1px solid #c7c7c7;
    width: 1px;
    height: 32px;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;


  .LogIn {
    display: flex;

    p {
      padding: 0 11px;
    }
  }
`;

const Button = styled.button`
  font-size: 14px;
  color: #767676;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &.submit{
    width: 120px;
    height: 32px;
    border: 1px solid #919191;
    border-radius: 5px;
  }
  &.icon{
    width: 48px;
    height: 49px;
    svg{
      margin: 0;
    }
  }
`;

export default Nav;
