import React, { useState } from 'react';
import styled from 'styled-components';
import { mypageFormat } from './MypageFormat';
import { buttonFormat } from './MypageFormat';
import { PROFILE } from '../../../config';

const EidtProfileForm = ({ userData }) => {
  const [userInfo, setUserInfo] = useState(userData);

  const handleEditButton = () => {
    fetch(PROFILE, {
      method: 'POST',
      body: JSON.stringify(userInfo),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  };

  const onChangeValue = event => {
    const value = event.target.value;
    const target = event.target.name;
    setUserInfo({ ...userInfo, [target]: value });
  };

  return (
    <>
      <Form>
        {mypageFormat[0].data.map((el, idx) => (
          <>
            <Label key={idx}>{el.text}</Label>
            <InputWrapper>
              <Input
                key={`InputKey ${idx}`}
                type="text"
                placeholder={el.placeholder}
                className={el.use}
                name={el.use}
                value={userData[el.use]}
                onChange={onChangeValue}
              />
            </InputWrapper>
          </>
        ))}
      </Form>
      <Buttons>
        {buttonFormat[0].buttons.map(el => {
          return el.inputColor ? (
            <Button inputColor="#F77800" onClick={handleEditButton}>
              {el.name}
            </Button>
          ) : (
            <Button>{el.name}</Button>
          );
        })}
      </Buttons>
    </>
  );
};

export default EidtProfileForm;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 16px;
`;

const Label = styled.label`
  margin-bottom: 15px;
  color: black;
  font-weight: 400;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  font-size: 14px;
  padding: 0px 16px;
  border: 1px solid rgb(221, 224, 226);
  border-radius: 3px;
  background-color: white;
  color: rgb(27, 28, 29);
  outline: none;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 100%;
  height: 45px;
  margin-bottom: 5px;
  border-radius: 5px;
  font-weight: bold;
  background-color: ${props => props.inputColor || '#dddde1'};
  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: none;
  }
`;
