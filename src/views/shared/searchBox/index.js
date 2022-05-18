import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { IconPhotoSearch, IconSearch } from '../../../icons';

function SearchBox({ shape }) {
  const navigate = useNavigate();

  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/s/photos/${value}`);
  };

  console.log('@@ value', value);

  return (
    <Container className={`SearchBox ${shape}`}>
      <Form
        className={shape}
        onSubmit={handleSubmit}
      >
        <Label className={shape}>
          <Button>
            <IconSearch />
          </Button>
          <Input
            type="text"
            placeholder="Search free high-resolution photos"
            onChange={handleChange}
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
