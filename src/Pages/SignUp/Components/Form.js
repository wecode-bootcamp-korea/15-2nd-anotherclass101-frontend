import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = props => {
  const { format, buttons } = props;
  console.log(format);
  return (
    <>
      <p>
        {format.text}
        <br />
        {format.textBottom}
      </p>
      <div>
        {format.data.map((element, idx) => {
          if (element.type === 'button') {
            return <Button key={idx} type={element.type} text={element.text} />;
          } else {
            return <Input key={idx} type={element.type} text={element.text} />;
          }
        })}
      </div>
      {format.type === 'signInProps' && (
        <div className="infoUser">
          <span>비밀번호를 잊으셨나요?</span>
          <span>회원 가입하기</span>
        </div>
      )}
      {format.type === 'signInProps' && (
        <button className="signBtn">로그인</button>
      )}
      {format.type === 'signUpProps' && (
        <>
          <button className="signBtn">동의하고 회원가입</button>
          <span className="infoClick">
            이용약관, 개인정보 수집 및 이용, 개인정보 제공
          </span>
          <span>내용을 확인하였고 동의합니다.</span>
        </>
      )}
      <hr />
      {format.type === ('signIn' || 'signUp')
        ? buttons.data.map((button, idx) => (
            <Button key={idx} type={button.type} text={button.text} />
          ))
        : ''}
    </>
  );
};

export default Form;
