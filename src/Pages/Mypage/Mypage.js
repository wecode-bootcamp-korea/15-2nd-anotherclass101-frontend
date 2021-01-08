import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MypageHeader from './MypageHeader';
import MypageAside from './MypageAside';
import MypageMain from './MypageMain';
import { USER_PROFILE } from '../../config';

const Mypage = props => {
  const [userInfo, setUserInfo] = useState([]);
  const [userData, setUserData] = useState({});
  const [userLike, setUserLike] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserData();
    getUserList();
    getLikeList();
  }, []);

  const getUserData = () => {
    fetch(USER_PROFILE, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        setUserData(res);
        setIsLoading(false);
      });
  };

  const getUserList = () => {
    fetch('/data/mypage_data.json')
      .then(res => res.json())
      .then(res => setUserInfo(res.user[0]));
  };

  const getLikeList = () => {
    fetch('/data/mypage_like.json')
      .then(res => res.json())
      .then(res => setUserLike(res.user[0]));
  };

  const handleLikeBtn = event => {
    userInfo.list.map(el => {
      !el.like ? el.like = true : el.like = false;
      })
      return setUserInfo({ ...userInfo });
    };
  };

  return (
    <>
      {isLoading ? (
        ''
      ) : (
        <MypageContainer>
          <MypageWrapper>
            <MypageHeader userData={userData.result} />
            <MainWrapper>
              <MypageAside userInfo={userInfo} />
              <MypageMain
                userInfo={userInfo}
                userLike={userLike}
                handleLikeBtn={handleLikeBtn}
              />
            </MainWrapper>
          </MypageWrapper>
        </MypageContainer>
      )}
    </>
  );
export default Mypage;

const MypageContainer = styled.main`
  width: 100%;
  height: 100%;
`;

const MypageWrapper = styled.div`
  max-width: 1240px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: 1330px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  padding-bottom: 64px;
`;
