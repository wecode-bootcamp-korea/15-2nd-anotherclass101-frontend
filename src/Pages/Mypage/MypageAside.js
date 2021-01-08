import React from 'react';
import styled from 'styled-components';
import UserGrade from './Components/UserGrade';
import MyInfo from './Components/MyInfo';

const MypageAside = props => {
  return (
    <Aside>
      <UserGrade />
      <MyInfo />
    </Aside>
  );
};

export default MypageAside;

const Aside = styled.aside`
  min-width: 320px;
  margin-right: 78px;
`;
