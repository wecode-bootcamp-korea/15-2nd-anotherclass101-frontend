import React from 'react';
import styled from 'styled-components';

const infoTabs = [
  {
    title: '내 포인트',
  },
  {
    title: '내 쿠폰',
  },
  {
    title: '내 응원',
  },
  {
    title: '주문 내역',
  },
];

const Tabs = () => {
  return (
    <>
      {infoTabs.map((el, idx) =>
        el.title === '내 포인트' ? (
          <Wrapper key={`Wrapper ${idx}`}>
            <Tab key={`Tab ${idx}`}>{el.title}</Tab>
            <UserPoint key={`UserPoint ${idx}`}>0P</UserPoint>
          </Wrapper>
        ) : (
          <>
            <Tab key={idx}>
              {el.title} <span>0</span>
            </Tab>
          </>
        )
      )}
    </>
  );
};

export default Tabs;

const Tab = styled.div`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.15px;
  margin-bottom: 15px;
  cursor: pointer;

  &:nth-of-type(1) {
    margin-bottom: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const UserPoint = styled.p`
  font-size: 14px;
`;
