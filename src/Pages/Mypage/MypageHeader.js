import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const MypageHeader = ({ userData }) => {
  const kakaoToken = localStorage.getItem('kakao_login_token');
  const history = useHistory();

  const moveToDetailPage = () => {
    history.push({
      pathname: '/Mypage/edit',
      state: { userData: userData },
    });
  };

  return (
    <Header>
      <MoveToDetail onClick={moveToDetailPage}>
        <UserName>
          {userData.name}
          {kakaoToken ? <KakaoIcon src="/images/kakao_login.png" /> : ''}
        </UserName>
        <UserEmail>{userData.email}</UserEmail>
      </MoveToDetail>
    </Header>
  );
};

export default MypageHeader;

const Header = styled.header`
  width: 100%;
  padding: 72px 0px 48px;
`;

const MoveToDetail = styled.div`
  width: 150px;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

const UserName = styled.h2`
  display: flex;
  align-items: center;
  font-size: 30px;
  line-height: 40px;
  font-weight: 600;
  color: black;
`;

const KakaoIcon = styled.img`
  width: 20px;
  margin-left: 4px;
`;

const UserEmail = styled.div`
  color: rgb(133, 138, 141);
`;
