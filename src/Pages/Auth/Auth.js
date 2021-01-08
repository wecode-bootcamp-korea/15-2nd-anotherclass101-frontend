import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { signInProps, signUpProps } from './Components/SignFormat';
import { KAKAO_LOGIN } from '../../config';
import styled, { css } from 'styled-components';
import LoginPage from './LoginPage';
import Buttons from './Components/Buttons';
import bgImg from './Components/Image/login-bg.jpg';
import cogoToast from 'cogo-toast';

const { Kakao } = window;

const Auth = props => {
  const history = useHistory();
  const [isLoginPage, setIsLoginPage] = useState(false);

  const toggleLoginPage = () => {
    setIsLoginPage(!isLoginPage);
  };

  const loginKakao = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch(KAKAO_LOGIN, {
          method: 'GET',
          headers: {
            authorization: authObj.access_token,
          },
        })
          .then(res => res.json())
          .then(res => {
            if (res.ACCESS_TOKEN) {
              localStorage.setItem('kakao_token', res.ACCESS_TOKEN);
              cogoToast.success('로그인 성공');
              history.push('/');
            }
          })
          .catch(error => console.log(error));
      },
      fail: function (error) {
        alert(JSON.stringify(error));
      },
    });
  };

  return (
    <div className="Auth">
      <SignUpContainer>
        <LeftSection>
          <LeftHeader>
            <Link to="/">
              <img src="../Images/logo.png" alt="logo" />
            </Link>
          </LeftHeader>
          {isLoginPage ? (
            <LoginPage
              signInProps={signInProps}
              signUpProps={signUpProps}
              loginKakao={loginKakao}
            />
          ) : (
            <FormWrapper>
              <div>
                <p>준비물까지 챙겨주는</p>
                <p>온라인 클래스</p>
              </div>
              <Buttons format={'kakao'} onClick={loginKakao} />
              <Buttons
                onClick={toggleLoginPage}
                format={'다른 방법으로 시작하기'}
              />
            </FormWrapper>
          )}
        </LeftSection>
        <RightSection />
      </SignUpContainer>
    </div>
  );
};

export default Auth;

const SignUpContainer = styled.div`
  width: 100vw;
  height: 130vh;
`;

const LeftSection = styled.div`
  ${props => props.theme.displayColumn};
  width: 50%;
  height: 130vh;
  float: left;
`;

const RightSection = styled.div`
  width: 50%;
  height: 130vh;
  float: right;
  background-image: url(${bgImg});
  background-size: cover;
`;

const LeftHeader = styled.div`
  width: ${props => props.theme.width};
  padding: 24px 15%;
`;

const FormWrapper = styled.div`
  ${props => props.theme.displayCenter};
  flex-direction: column;
  width: ${props => props.theme.width};
  height: 80vh;
  padding: 0 15%;

  div {
    ${props => props.theme.displayColumnAndStart};
    margin-bottom: 25px;
    width: ${props => props.theme.width};
    p {
      font-weight: bold;
      font-size: 30px;
      margin-bottom: 10px;
      color: #3e4042;
    }
  }
`;
