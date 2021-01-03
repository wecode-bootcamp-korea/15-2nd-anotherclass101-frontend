import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { USER_PROFILE } from '../../../config';

const DetailNav = props => {
  const [isNotionShow, setIsNotionShow] = useState(true);
  const [isModalActive, setIsModalActive] = useState(false);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserData();
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

  return (
    <>
      <Notion isNotionShow={isNotionShow}>
        <Conbox>
          <p>지금 크리에이터 도전하고 100만원 지원금 받으세요</p>
          <button onClick={() => setIsNotionShow(false)}>
            <i class="fas fa-times" />
          </button>
        </Conbox>
      </Notion>
      <Conbox>
        <div className="logoAndSearch">
          <img src="/images/logo.png" alt="로고" />
          <InputBox>
            <input type="text" placeholder="배우고 싶은 것이 있나요?" />
            <i class="fas fa-search" />
          </InputBox>
        </div>
        <MenuNavBar>
          <li onClick={() => setIsModalActive(!isModalActive)}>
            {isLoading ? '' : <img src={userData.result.image} alt="profile" />}
            <i class="fas fa-chevron-down" />
          </li>
          <NavModalbox isModalActive={isModalActive}>
            <div className="myPage ">
              {isLoading ? '' : userData.result.name}
              <p>
                <br />
                <span>
                  마이페이지 <i class="fas fa-chevron-right" />
                </span>
              </p>
            </div>
            <p>내 응원 클래스</p>
            <p>로그아웃</p>
          </NavModalbox>
        </MenuNavBar>
      </Conbox>
    </>
  );
};

export default DetailNav;
