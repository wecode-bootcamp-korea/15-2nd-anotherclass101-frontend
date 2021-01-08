import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import cogoToast from 'cogo-toast';
import { SIGNIN, SIGNUP } from '../../config';
import FormWrapper from './Components/FormWrapper';
import Buttons from './Components/Buttons';
import styled from 'styled-components';

const initialState = {
  name: '',
  email: '',
  password: '',
  repassword: '',
  phonenumber: '',
  errors: {
    name: '',
    email: '',
    password: '',
    repassword: '',
    phonenumber: '',
  },
};

const LoginPage = ({ signInProps, signUpProps, loginKakao }) => {
  const history = useHistory();
  const [isSignUpPage, setSignUpPage] = useState(false);
  const [signInFormats, setSignInFormats] = useState(signInProps);
  const [signUpFormats, setSignUpFormats] = useState(signUpProps);
  const [inputs, setInputs] = useState(initialState);

  const toggleUserPage = () => {
    setInputs(initialState);
    setSignUpPage(!isSignUpPage);
  };

  const checkLoginForm = event => {
    event.preventDefault();
    const { email, password } = inputs;
    const { email: errorEmail, password: errorPassword } = inputs.errors;
    if (email === '' || password === '') {
      cogoToast.error('모든 항목을 채워주세요');
    } else if (errorEmail === true || errorPassword === true) {
      cogoToast.error('형식을 갖춰서 입력해주세요');
    } else {
      fetch(SIGNIN, {
        method: 'POST',
        body: JSON.stringify({
          email: inputs.email,
          password: inputs.password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === 'INVALID_EMAIL') {
            cogoToast.error('이메일을 다시 확인해주세요.');
          } else if (res.message === 'INVALID_PASSWORD') {
            cogoToast.error('패스워드를 다시 확인해주세요.');
          } else {
            sessionStorage.setItem('ACCESS_TOKEN', res.ACCESS_TOKEN);
            cogoToast.success('로그인이 성공했습니다!');
            history.push('/');
          }
        })
        .catch(error => console.log('에러 : ', error));
    }
  };

  const checkSignUpForm = event => {
    event.preventDefault();
    const { name, email, password, repassword, phonenumber } = inputs;
    const {
      name: errorName,
      email: errorEmail,
      password: errorPassword,
      repassword: errorRePassword,
      phonenumber: errorPhoneNumber,
    } = inputs.errors;

    if (
      name === '' ||
      email === '' ||
      password === '' ||
      repassword === '' ||
      phonenumber === ''
    ) {
      cogoToast.error('모든 항목을 채워주세요');
    } else if (
      errorName === true ||
      errorEmail === true ||
      errorPassword === true ||
      errorRePassword === true ||
      errorPhoneNumber === true
    ) {
      cogoToast.error('형식을 갖춰서 입력해주세요');
    } else {
      const signUpObj = {
        name,
        email,
        password,
        phone: phonenumber,
      };
      fetch(SIGNUP, {
        method: 'POST',
        body: JSON.stringify(signUpObj),
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === 'SUCCESS') {
            cogoToast.success('회원가입 성공!');
            history.push('/');
          } else if (res.message === 'EXISTS_ACCOUNT') {
            cogoToast.error(
              '이메일이 이미 등록되어있습니다. 다른 이메일을 입력해주세요'
            );
          }
        })
        .catch(error => console.log(`signUp error ${error}`));
    }
  };

  return (
    <Wrapper>
      {isSignUpPage ? (
        <>
          <FormWrapper
            format={signUpFormats[0]}
            inputs={inputs}
            setInputs={setInputs}
          />
          <Buttons format={signUpFormats[0].button} onClick={checkSignUpForm} />
        </>
      ) : (
        <>
          <FormWrapper
            format={signInFormats[0]}
            inputs={inputs}
            setInputs={setInputs}
          />
          <ForgotOrSignUp>
            <span>비밀번호를 잊으셨나요?</span>
            <span onClick={toggleUserPage}>회원 가입하기</span>
          </ForgotOrSignUp>
          <Buttons format={signInFormats[0].button} onClick={checkLoginForm} />
        </>
      )}
      <Hr />
      <Buttons format={'kakao'} onClick={loginKakao} />
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  width: ${props => props.theme.width};
  padding: 24px 15%;
`;

const ForgotOrSignUp = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${props => props.theme.width};
  margin-bottom: 15px;
  span {
    color: #a8aeb2;
    font-size: 12px;
    cursor: pointer;
  }
`;

const Hr = styled.hr`
  opacity: 0.2;
  margin: 15px 0px;
`;
