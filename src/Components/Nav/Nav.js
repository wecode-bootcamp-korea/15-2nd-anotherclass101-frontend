import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { USER_PROFILE } from '../../config';
const Nav = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [isNotionShow, setIsNotionShow] = useState(true);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
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
  const LOGIN = localStorage.getItem('token');
  const goToCreator = () => {
    if (localStorage.getItem('token')) {
      history.push('/Creator');
    } else {
      alert('로그인 후 가능한 서비스 입니다');
      history.push('/Auth');
    }
  };
  const goToMyPage = () => {
    history.push('/Mypage');
  };
  const goToLogin = () => {
    history.push('/Auth');
  };
  const Logout = () => {
    localStorage.removeItem('token');
  };
  const goMain = () => {
    history.push('/Main');
  };
  return (
    <>
      <Notion isNotionShow={isNotionShow}>
        <Conbox>
          <p>지금 크리에이터 도전하고 100만원 지원금 받으세요</p>
          <button onClick={() => setIsNotionShow(false)}>
            <i className="fas fa-times" />
          </button>
        </Conbox>
      </Notion>
      <Navbar>
        <Conbox>
          <div>
            <img src="/images/logo.png" alt="로고" onClick={goMain} />
            <InputBox>
              <input type="text" placeholder="배우고 싶은 것이 있나요?" />
              <i className="fas fa-search" />
            </InputBox>
          </div>
          <MenuNavBar>
            <li onClick={goToCreator}>크리에이터 센터</li>
            <li onClick={goToLogin}>로그인</li>
            {LOGIN && (
              <span>
                <li>주문 및 배송</li>
                <li>내 쿠폰</li>
                <li>보상바구니</li>
                <li>내 클래스</li>
              </span>
            )}
            {LOGIN && (
              <li onClick={() => setIsModalActive(!isModalActive)}>
                <img src="images/orange.png" alt="오렌지" />
                <i class="fas fa-chevron-down" />
              </li>
            )}
            <NavModalbox isModalActive={isModalActive}>
              <div className="myPage ">
                <img src="/images/orange.png" alt="마이페이지" />
                <p>
                  한민아
                  <br />
                  <span onClick={goToMyPage}>
                    마이페이지 <i className="fas fa-chevron-right" />
                  </span>
                </p>
              </div>
              <p>내 응원 클래스</p>
              <p onClick={Logout}>로그아웃</p>
            </NavModalbox>
          </MenuNavBar>
          )}
        </Conbox>
      </Navbar>
    </>
  );
};
export default Nav;
const Notion = styled.div`
  display: ${props => (props.isNotionShow ? 'block' : 'none')};
  width: 100%;
  height: 44px;
  background-color: rgb(27, 28, 29);
  color: white;
  p,
  button {
    line-height: 44px;
    font-size: 14px;
  }
  button {
    background: none;
    border: none;
    color: white;
  }
`;
const Conbox = styled.div`
  width: 1176px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 138px;
    cursor: pointer;
  }
`;
const Navbar = styled.div`
  padding: 14px 0;
  width: 100%;
  background: white;
`;
const InputBox = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  margin-left: 32px;
  input {
    padding: 1px 44px 1px 16px;
    width: 380px;
    height: 40px;
    border: 1px solid rgb(226, 226, 226);
    box-shadow: 1px 1px 1px 1px rgb(226, 226, 226);
    border-radius: 3px;
  }
  i {
    position: absolute;
    top: 10px;
    right: 14px;
  }
`;
const MenuNavBar = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  li {
    float: left;
    margin-left: 24px;
    font-size: 14px;
    color: rgb(27, 28, 29);
    cursor: pointer;
    img {
      width: 35px;
      height: 35px;
      border-radius: 100%;
      vertical-align: middle;
      margin-right: 3px;
    }
    i {
      font-size: 10px;
    }
  }
`;
const NavModalbox = styled.div`
  display: ${props => (props.isModalActive ? 'block' : 'none')};
  position: absolute;
  top: 45px;
  right: 0;
  width: 200px;
  height: 200px;
  padding: 30px;
  border-radius: 3px;
  box-shadow: 1px 3px 5px 2px rgb(211, 211, 211);
  border-radius: 3px;
  background: white;
  z-index: 10;
  img {
    width: 35px;
    height: 35px;
    border-radius: 100%;
  }
  .myPage {
    border-bottom: 1px solid #ccc;
    margin-bottom: 22px;
    p {
      display: inline-block;
      line-height: 20px;
      vertical-align: top;
      cursor: pointer;
      span {
        display: inline-block;
        margin-bottom: 22px;
        font-size: 11px;
        color: rgb(253, 126, 20);
        cursor: pointer;
      }
    }
  }
  p {
    line-height: 33px;
    cursor: pointer;
  }
`;
