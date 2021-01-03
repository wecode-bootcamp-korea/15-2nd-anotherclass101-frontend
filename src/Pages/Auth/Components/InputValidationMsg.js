import React from 'react';
import styled, { css } from 'styled-components';

const InputValidationMsg = ({ inputs, type, inputname }) => {
  return <>{inputname === type && <Message>{inputs}</Message>}</>;
};
export default InputValidationMsg;

const Message = styled.p`
  margin-top: 10px;
  margin-bottom: 15px;
  font-size: 13px;
  color: red;
`;
