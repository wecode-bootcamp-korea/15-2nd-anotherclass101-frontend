import React from 'react';
import styled from 'styled-components';

const Title = props => {
  const { title } = props;
  return <PageTitle>{title}</PageTitle>;
};

export default Title;

const PageTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 500;
`;
