import React from 'react';
import Form from './Components/Form';
import styled, { css } from 'styled-components';
import bgImg from './Components/image/login-bg.png';

const SignUp = () => {
  return (
    <SignUpContainer>
      <LeftSection>
        <Header>
          <img src="/images/logo.png" />
          <ul>
            <li>English</li>
            <li>日本語</li>
            <li>한국어</li>
          </ul>
        </Header>
        <FormWrapper>
          <Form format={signMain} buttons={buttons} />
        </FormWrapper>
      </LeftSection>
      <RightSection />
    </SignUpContainer>
  );
};

export default SignUp;

const signMain = {
  type: 'main',
  text: '준비물까지 챙겨주는',
  textBottom: '온라인 클래스',
  data: [
    {
      type: 'button',
      text: '카카오로 3초 만에 시작하기',
    },
    {
      type: 'button',
      text: '다른 방법으로 시작하기',
    },
  ],
};

const signInProps = {
  type: 'signIn',
  text: '로그인',
  data: [
    {
      type: 'email',
      text: '이메일',
    },
    {
      type: 'password',
      text: '비밀번호',
    },
    {
      type: 'text',
      text: '비밀번호를 잊으셨나요?',
    },
    {
      type: 'text',
      text: '회원 가입하기',
    },
  ],
};

const signUpProps = {
  type: 'signUp',
  text: '회원가입',
  data: [
    {
      type: 'text',
      text: '이름',
    },
    {
      type: 'email',
      text: '이메일',
    },
    {
      type: 'password',
      text: '비밀번호',
    },
    {
      type: 'password',
      text: '비밀번호 확인',
    },
  ],
};

const buttons = {
  data: [
    {
      type: 'button',
      text: '카카오로 3초 만에 시작하기',
    },
    {
      type: 'button',
      text: '네이버로 시작하기',
    },
    {
      type: 'button',
      text: '페이스북으로 시작하기',
    },
    {
      type: 'button',
      text: '구글로 시작하기',
    },
    {
      type: 'button',
      text: '애플로 시작하기',
    },
  ],
};

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpContainer = styled.div`
  height: 100vh;
`;

const LeftSection = styled.div`
  width: 50%;
  height: 100vh;
  float: left;
`;

const RightSection = styled.div`
  width: 50%;
  height: 100vh;
  float: left;
  background-image: url(${bgImg});
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  margin-top: 30px;
  width: 100%;
  max-width: 376px;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 0px auto;
  margin-top: 10em;
  flex: 1 1 0%;
  width: 100%;
  max-width: 376px;

  p {
    font-weight: bold;
    font-size: 30px;
    word-wrap: keep-all;
  }
`;
