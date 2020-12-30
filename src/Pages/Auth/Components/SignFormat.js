export const signInProps = [
  {
    type: 'signIn',
    text: '로그인',
    data: [
      {
        type: 'email',
        use: 'email',
        text: '이메일',
        placehoder: 'example@naver.com',
      },
      {
        type: 'password',
        use: 'password',
        text: '비밀번호',
        placehoder: '******',
      },
    ],
    button: '로그인',
  },
];

export const signUpProps = [
  {
    type: 'signUp',
    text: '회원가입',
    data: [
      {
        type: 'text',
        use: 'name',
        text: '이름',
        placehoder: '홍길동',
      },
      {
        type: 'text',
        use: 'email',
        text: '이메일',
        placehoder: 'example@example.com',
      },
      {
        type: 'password',
        use: 'password',
        text: '비밀번호',
        placehoder: '********',
      },
      {
        type: 'password',
        use: 'repassword',
        text: '비밀번호 확인',
        placehoder: '********',
      },
      {
        type: 'text',
        use: 'phonenumber',
        text: '휴대폰 번호',
        placeholder: '010123456789',
      },
    ],
    button: '동의하고 회원가입',
  },
];
