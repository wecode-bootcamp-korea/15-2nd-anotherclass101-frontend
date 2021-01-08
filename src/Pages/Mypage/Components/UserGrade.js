import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const UserGrade = props => {
  return (
    <GradeContainer>
      <Title title={'내 등급'} />
      <InnerWrapper>
        <Top>
          <NowGrade>LV. Amateur</NowGrade>
          <Benefits>혜택보기</Benefits>
        </Top>
        <Hr />
        <PointDescription>
          <span>10,000P</span>
          <span> 추가 적립시 다음 달 Lv.Professional</span>
        </PointDescription>
      </InnerWrapper>
    </GradeContainer>
  );
};

export default UserGrade;

const GradeContainer = styled.div`
  margin-bottom: 48px;
  cursor: pointer;
`;

const InnerWrapper = styled.div`
  background-color: rgb(0, 176, 49);
  border-radius: 2px;
  padding: 16px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const Hr = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
  margin-bottom: 8px;
  opacity: 0.3;
`;

const NowGrade = styled.span`
  height: 18px;
  font-family: 'Anton', sans-serif;
  color: white;
`;

const Benefits = styled.span`
  color: white;
  font-size: 11px;
`;

const PointDescription = styled.div`
  span {
    font-size: 11px;
    line-height: 16ox;
    color: white;
  }
`;
