import React from 'react';
import styled from 'styled-components';
import { FaCalendar } from 'react-icons/fa';

const Buttons = ({ format, onClick }) => {
  const buttonGroup =
    format === '로그인' ||
    format === '동의하고 회원가입' ||
    format === '다른 방법으로 시작하기';

  if (buttonGroup) return <Button onClick={onClick}>{format}</Button>;

  return (
    <Kakao onClick={onClick}>
      <FaCalendar />
      &nbsp;&nbsp;카카오로 3초 만에 시작하기
    </Kakao>
  );
};

export default Buttons;

const Button = styled.button`
  width: 100%;
  height: 45px;
  margin-bottom: 5px;
  border-radius: 5px;
  font-weight: bold;
  background-color: #f77804;
  color: #ffffff;
  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: none;
  }
`;

const Kakao = styled(Button)`
  color: #000000;
  background-color: #ffe912;
`;
