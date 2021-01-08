import React from 'react';
import styled from 'styled-components';

const Title = ({ title }) => {
  return <SectionTitle>{title}</SectionTitle>;
};

export default Title;

const SectionTitle = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;
