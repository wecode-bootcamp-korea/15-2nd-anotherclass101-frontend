export const mypageFormat = [
  {
    type: 'mypage',
    data: [
      {
        type: 'text',
        use: 'name',
        text: '이름',
        placeholder: '이름을 입력해 주세요',
      },
      {
        type: 'text',
        use: 'nickname',
        text: '닉네임',
        placeholder: '김별이',
      },
      {
        type: 'text',
        use: 'phone',
        text: '휴대폰 번호',
        placeholder: '-을 제외한 휴대폰 번호를 입력해주세요.',
      },
    ],
  },
];

export const buttonFormat = [
  {
    buttons: [
      {
        name: '수정하기',
        inputColor: 'red',
      },
      {
        name: '회원 탈퇴',
      },
    ],
  },
];

export const footerFormat = [
  {
    title: '클래스101',
    content: '홈',
  },
  {
    title: '크리에이터',
    content: '지원하기',
  },
  {
    title: '고객센터',
    content: '오전 10시  오후 6시 (주말, 공휴일 제외)',
  },
];
