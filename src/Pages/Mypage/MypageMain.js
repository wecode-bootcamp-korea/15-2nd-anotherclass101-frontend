import React from 'react';
import Title from './Components/Title';
import styled from 'styled-components';
import Card from './Components/Card';

const MypageMain = ({ userInfo, userLike, handleLikeBtn }) => {
  return (
      <Main>
        <MainHeader>
          <Title title={'내가 본 클래스'} />
        </MainHeader>
        <div>
          <CardList>
            <Card userInfo={userInfo} handleLikeBtn={handleLikeBtn} />
          </CardList>
        </div>
        <MainHeader>
          <Title title={'내가 찜한 클래스'} />
        </MainHeader>
        <div>
          <CardList>
            <Card userInfo={userLike} handleLikeBtn={handleLikeBtn} />
          </CardList>
        </div>
      </Main>
  );
};

export default MypageMain;

const Main = styled.section`
  max-width: 100%;
`;

const MainHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const CardList = styled.div`
  padding: 0;
  margin: 0;
  margin-bottom: 25px;
`;
