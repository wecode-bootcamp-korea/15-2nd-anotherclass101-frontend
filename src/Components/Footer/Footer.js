import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/Theme';

const Footer = props => {
  return (
    <Wepper>
      <div>
        <TextBox>
          <UlBox>
            <ul>
              <li>
                클래스
                <ul>
                  <li>홈</li>
                  <li>채용</li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                크리에이터
                <ul>
                  <li>지원하기</li>
                </ul>
              </li>
            </ul>
          </UlBox>
          <Center>
            <p>
              <b>고객센터</b> 오전 10시 ~ 오후 6시 (주말 , 공휴일 제외)
            </p>
            <div>
              <i className="fas fa-comment"></i>
              문의하기
            </div>
          </Center>
        </TextBox>
        <div>
          <CLASS101>
            <span>Class101 Inc.</span>
            <ul>
              <li>이용약관</li>
              <li>
                <b>개인정보 처리방침</b>
              </li>
              <li>환불 정책</li>
              <li>사업자 정보 확인</li>
              <li>제휴/협력 문의</li>
              <li>단체/기업 교육 문의</li>
              <li>정기구독서비스 이용약관</li>
            </ul>
          </CLASS101>

          <Address>
            (주)클래스 101 | 대표 고지연 | 서울특별시 중구 통일로 10
            세브란스빌딩 18층 | 사업자등록번호 : 457-81-00277 | 통신판매업신고 :
            2019-서울중구-0087
          </Address>
        </div>
        <Icon>
          <ul>
            <li>
              <i className="fab fa-youtube"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
            <li>
              <i className="fab fa-facebook-square"></i>
            </li>
            <li>
              <i className="fab fa-blogger"></i>
            </li>
            <li>
              <i className="fas fa-blog"></i>
            </li>
            <li>
              <i className="fab fa-google-play"></i>
            </li>
            <li>
              <i className="fab fa-apple"></i>
            </li>
          </ul>
        </Icon>
      </div>
    </Wepper>
  );
};

export default Footer;

const Wepper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 280px;
  border-top: 1px solid ${theme.lightGray};

  > div {
    position: relative;
    width: 1200px;
    margin: 0 auto;

    > div {
      padding-top: 30px;
      display: flex;
      justify-content: space-between;
    }
  }
`;

const TextBox = styled.div`
  padding-top: 2.5rem;
  ${theme.displayCenter}
`;

const UlBox = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  > ul {
    width: calc(100% - 50%);
    font-weight: bold;
    font-size: 15px;

    > li > ul {
      font-weight: normal;
      color: ${theme.deepGray};
      font-size: 14px;
    }
  }

  li {
    line-height: 25px;
  }
`;

const Center = styled.div`
  width: 400px;

  > p {
    letter-spacing: -0.5px;
    font-size: 12px;
    color: ${theme.deepGray};
    margin-bottom: 10px;

    > b {
      padding-right: 5px;
      font-weight: bold;
      font-size: 15px;
      color: ${theme.black};
    }
  }

  > div {
    padding: 0.8rem;
    border: 1px solid ${theme.hoverGray};
    border-radius: 3px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;

    i {
      font-size: 16px;
      padding-right: 5px;
    }
  }
`;

const CLASS101 = styled.div`
  width: 450px;
  font-size: 12px;

  > span {
    font-weight: bold;
  }

  > ul {
    width: 400px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    > li {
      padding: 5px 5px 5px 0;
    }
    > li::after {
      content: ' | ';
    }
    > li:nth-child(4)::after,
    li:last-child::after {
      content: '';
    }
  }
`;

const Address = styled.div`
  margin-top: 35px;
  letter-spacing: -1px;
  font-size: 12px;
  color: ${theme.deepGray};
`;

const Icon = styled.div`
  position: absolute;
  top: 190px;
  right: 0;
  > ul {
    width: 300px;
    display: flex;
    justify-content: space-between;
  }
  li {
    width: 35px;
    height: 35px;
    padding-top: 7px;
    border-radius: 50%;
    background-color: ${theme.black};
    cursor: pointer;
    text-align: center;
  }
  i {
    font-size: 18px;
    color: ${theme.white};
  }
`;