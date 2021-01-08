import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SideInfo = ({ startDate }) => {
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <SideWrap>
      <Artist>기타 &middot; 경5</Artist>
      <Title>비지니스 메일 잘 작성해보기</Title>
      {startDate ? (
        <Inroll>1.5(화) 부터 수강 가능</Inroll>
      ) : (
        <div>
          <Present>선물하기</Present>
          <Inroll>바로 수강 가능</Inroll>
        </div>
      )}
      <WithCoupon>쿠폰 적용 시</WithCoupon>
      <Price>
        <Discount>
          <DisountInfo>
            5개월 할부 <i class="far fa-question-circle" />
          </DisountInfo>

          <Number>
            <span>35%</span>월 15,333원
          </Number>
        </Discount>
        <Discount>
          <DisountInfo>
            총 할인액
            <Timer>
              <span>6일 </span>
              <span>08</span>
              <span> : </span>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              <span> 남음 </span>
            </Timer>
          </DisountInfo>
          <PinkNumber>-109,500원</PinkNumber>
        </Discount>
      </Price>
      <Coupon>
        얼리버드 쿠폰 받기
        <i class="fas fa-download" />
      </Coupon>
      <Ico>
        <span>
          <i class="fab fa-youtube" />
          콘텐츠 이용권
        </span>
        <span>
          <i class="fas fa-gift" />
          준비물 키트
        </span>
        <span>
          <i class="far fa-user" />
          입문자 대상
        </span>
        <span>
          <i class="far fa-thumbs-up" />
          강의 만족도 100%
        </span>
      </Ico>
      <Buttons>
        <GrayButton>
          <i class="far fa-heart" /> 6312
        </GrayButton>
        <GrayButton>
          <i class="fas fa-upload" /> 공유하기
        </GrayButton>
        <OrangeButton>
          <i class="fas fa-gift" /> 선물하기
        </OrangeButton>
      </Buttons>
      <ClassInroll>
        클래스 신청하기<span>25개 남음</span>
      </ClassInroll>
    </SideWrap>
  );
};

export default SideInfo;

const SideWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 24px;
  color: #1b1c1d;
  width: 368px;
  box-shadow: 4px 3px 2px 1px rgb(226, 226, 226);
  border-left: 1px solid #eee;
`;

const Artist = styled.p`
  font-size: 14px;
  margin-bottom: 4px;
  line-height: 20px;
`;

const Title = styled.p`
  font-size: 20px;
  margin-bottom: 8px;
  font-weight: bold;
  line-height: 28px;
`;

const txtButton = styled.p`
  display: inline-block;
  padding: 6px;
  border-radius: 3px;
  background-color: rgb(248, 248, 249);
  font-size: 11px;
  font-weight: 600;
`;

const Present = styled(txtButton)`
  margin-right: 3px;
  margin-bottom: 10px;
  color: #f33340;
`;
const Inroll = styled(txtButton)`
  color: #858a8d;
`;
const WithCoupon = styled.p`
  color: #858a8d;
  font-size: 11px;
  font-weight: normal;
  margin-bottom: 3px;
  text-align: right;
`;

const Price = styled.div`
  width: 100%;
`;

const Discount = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid #eee;
`;

const DisountInfo = styled.p`
  display: inline-block;
  font-size: 10px;
  font-weight: bold;
`;

const Number = styled.p`
  display: inline-block;
  text-align: right;
  font-size: 18px;
  font-weight: bold;

  span {
    font-size: 16px;
    color: #ff518f;
    margin-right: 5px;
  }
`;

const PinkNumber = styled(Number)`
  color: #ff518f;
`;

const Coupon = styled.button`
  width: 100%;
  padding: 14px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 3px;
  background-color: #ff518f;
  color: #fff;
  margin-bottom: 20px;

  i {
    margin-left: 10px;
  }
`;

const Ico = styled.div`
  width: 100%;
  font-size: 15px;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
  padding: 10px 0;
  span {
    display: inline-block;
    width: 50%;
    line-height: 40px;
  }
  i {
    margin-right: 7px;
  }
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const Button = styled.button`
  width: 100px;
  font-size: 14px;
  padding: 8px 0;
  border-radius: 3px;
`;

const GrayButton = styled(Button)``;

const OrangeButton = styled(Button)`
  color: white;

  background-color: #ff922b;
`;

const ClassInroll = styled(OrangeButton)`
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  padding: 16px 0;

  span {
    font-weight: normal;
    font-size: 12px;
    margin-left: 10px;
  }
`;

const Timer = styled.span`
  margin-left: 10px;
  font-size: 15px;
  color: rgb(252, 61, 70);
`;
