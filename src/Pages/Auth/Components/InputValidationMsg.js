import React from 'react';
import styled, { css } from 'styled-components';

const InputValidationMsg = React.memo(({ error, inputname }) => {
  const { name, email, password, repassword, phonenumber } = error.errors;

  const errorMessage = [
    { Name: 'name', prposName: name },
    { Name: 'email', prposName: email },
    { Name: 'password', prposName: password },
    { Name: 'repassword', prposName: repassword },
    { Name: 'phonenumber', prposName: phonenumber },
  ];
  return (
    <>
      {errorMessage.map(list => {
        return (
          inputname === list.Name && (
            <Message className={list.Name}>{list.prposName}</Message>
          )
        );
      })}
    </>
  );
});

export default InputValidationMsg;

const Message = styled.p`
  margin-top: 10px;
  margin-bottom: 15px;
  font-size: 13px;
  color: red;
`;
