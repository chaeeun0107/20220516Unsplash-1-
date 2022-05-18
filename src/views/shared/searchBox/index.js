import styled from 'styled-components';

import { IconPhotoSearch, IconSearch } from '../../../icons';

function SearchBox({ shape }) {
  return (
    <Container className={`'SearchBox'${shape}`}>
      <Form className={shape}>
        <Label className={shape}>
          <Button>
            <IconSearch />
          </Button>
          <Input
            type="text"
            placeholder="Search free high-resolution photos"
            className={shape}
          />
          <Button className="photo">
            <IconPhotoSearch />
          </Button>
        </Label>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
`;

const Form = styled.form`
  display: flex;

  svg {
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  height: 38px;
  background-color: #eee;
  &.round {
    border-radius: 500px;
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 14px;
`;

const Button = styled.button`
  width: 34px;
  height: 20px;
  padding-left: 14px;
  cursor: pointer;
  margin-right: 10px;

  svg {
    fill: #8a8a8a;
    width: 20px;
    height: 20px;
  }
  &.photo{
    width: 48px;
    height: 38px;
    padding: 0 14px;
    margin: 0;
  }
`;

export default SearchBox;
