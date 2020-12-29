import React from 'react';
import styled, { css } from 'styled-components';
import Title from './Title';
import InputAndLabel from './InputAndLabel';

const FormWrapper = React.memo(({ format, inputs, setInputs }) => {
  return (
    <Form>
      <Title title={format.text} />
      <InputAndLabel
        format={format.data.map(element => element)}
        inputs={inputs}
        setInputs={setInputs}
      />
    </Form>
  );
});

export default FormWrapper;

const Form = styled.div`
  width: 100%;
`;
