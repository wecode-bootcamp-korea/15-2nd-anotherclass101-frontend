import React, { useState } from 'react';
import styled from 'styled-components';
import InputValidationMsg from './InputValidationMsg';
import { SEND_MSG, CHECK_MSG } from '../../../config';
import cogoToast from 'cogo-toast';

const InputAndLabel = React.memo(({ format, inputs, setInputs }) => {
  const [checkAuthNum, setCheckAuthNum] = useState(false);
  const [authNum, setAuthNum] = useState();

  const validationSiginInInputs = event => {
    let errors = inputs.errors;
    const { name, value } = event.target;
    const EMAIL_REGEX = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    const PASSWORD_REGEX = /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    switch (name) {
      case 'name':
        errors.name = value.length < 2 && '이름을 적어주세요';
        break;
      case 'email':
        errors.email = !EMAIL_REGEX.test(value) && '이메일 형식을 갖춰주세요';
        break;
      case 'password':
        errors.password =
          !PASSWORD_REGEX.test(value) &&
          '영문 대문자/영문 소문자/숫자/특수문자 중 2가지 이상 조합, 8자~32자';

        break;
      case 'repassword':
        errors.repassword =
          inputs.password !== value && '비밀번호가 일치하지 않습니다.';
        break;
      case 'phonenumber':
        errors.phonenumber =
          !(value.length === 11) && '휴대폰 번호는 11자리 입력해주세요.';
        break;
      default:
        break;
    }
    setInputs({ ...inputs, [name]: value, errors });
  };

  const getAuthNum = event => {
    const msgNum = event.target.value;
    setAuthNum(msgNum);
  };

  const checkUserPhonenumber = event => {
    event.preventDefault();
    setCheckAuthNum(!checkAuthNum);
    const data = {
      phone: inputs.phonenumber,
    };
    fetch(SEND_MSG, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'INVALID_EMAIL') {
          cogoToast.fail('이메일을 다시 확인해주세요.');
        }
      })
      .catch(error => console.log(error));
  };

  const checkAuthNumber = event => {
    event.preventDefault();
    const data = {
      phone: inputs.phonenumber,
      code: authNum,
    };
    fetch(CHECK_MSG, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          cogoToast.success('인증이 완료되었습니다.');
          setCheckAuthNum(!checkAuthNum);
        }
        if (res.message === 'INVALID_NUMBER') {
          cogoToast.success('인증번호가 틀렸습니다.');
        }

        return cogoToast.success('다시 한번 확인해주세요');
      })
      .catch(error => console.log(`인증번호 에러 ${error}`));
  };

  return (
    <>
      {format.map((el, idx) => (
        <Wrapper key={`wrapperKey ${idx}`}>
          <Label key={`LabelKey ${idx}`}>{el.text}</Label>
          {el.use === 'phonenumber' ? (
            <>
              <PhoneWrapper>
                <Input
                  key={`InputKey ${idx}`}
                  type={el.type}
                  placeholder={el.placeholder}
                  name={el.use}
                  className={el.use}
                  onChange={validationSiginInInputs}
                />
                <PhoneBtn onClick={checkUserPhonenumber}>인증</PhoneBtn>
              </PhoneWrapper>
              {!checkAuthNum ? (
                ''
              ) : (
                <PhoneWrapper className="authNumWrapper">
                  <Input
                    className="authNum"
                    placeholder="인증번호를 입력해주세요"
                    onChange={getAuthNum}
                  />
                  <PhoneBtn onClick={checkAuthNumber}>확인</PhoneBtn>
                </PhoneWrapper>
              )}
            </>
          ) : (
            <Input
              key={`InputKey ${idx}`}
              type={el.type}
              placeholder={el.placehoder}
              name={el.use}
              className={el.use}
              onChange={validationSiginInInputs}
            />
          )}
          {Object.keys(inputs.errors).map(type => {
            return (
              <InputValidationMsg
                type={type}
                inputs={inputs.errors[type]}
                inputname={el.use}
              />
            );
          })}
        </Wrapper>
      ))}
    </>
  );
});

export default InputAndLabel;

const PhoneWrapper = styled.div`
  display: flex;
  align-items: center;

  &.authNumWrapper {
    margin-top: 10px;
  }
`;

const PhoneBtn = styled.button`
  margin-left: 5px;
  width: 20%;
  height: 45px;
  border: 1px solid rgb(221, 224, 225);
  border-radius: 5px;
  background-color: rgb(248, 248, 249);
`;

const Wrapper = styled.div`
  ${props => props.theme.displayColumn};
  width: ${props => props.theme.width};
  margin-top: 5px;
`;

const Label = styled.label`
  margin-bottom: 15px;
  color: black;
  font-weight: 400;
`;

const Input = styled.input`
  padding: 15px 15px;
  border: 1px solid #eaebec;
  border-radius: 5px;

  &:focus {
    outline: none;
  }

  &.phonenumber,
  &.authNum {
    width: 30em;
  }
`;
