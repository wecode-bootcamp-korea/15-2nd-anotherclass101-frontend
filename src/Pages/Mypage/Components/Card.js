import React from 'react';
import styled from 'styled-components';
import { IoHeart, IoThumbsUp } from 'react-icons/io5';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

const Card = ({ userInfo, handleLikeBtn }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slidesPerView: 3,
  });
  const { list } = userInfo;

  function ArrowLeft(props) {
    const disabeld = props.disabled ? ' arrow--disabled' : '';
    return (
      <svg
        onClick={props.onClick}
        className={'arrow arrow--left' + disabeld}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>
    );
  }

  function ArrowRight(props) {
    const disabeld = props.disabled ? ' arrow--disabled' : '';
    return (
      <svg
        onClick={props.onClick}
        className={'arrow arrow--right' + disabeld}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
    );
  }

  return (
    <div className="navigation-wrapper">
      <div ref={sliderRef}>
        {list?.map((el, idx) => (
          <Cards
            key={idx}
            className={`keen-slider__slide number-slide${idx + 1}`}
          >
            <CardWrapper>
              <ImageWrapper key={`img ${idx}`}>
                <img src={el.image} alt="클래스 이미지입니다." />
                <span onClick={handleLikeBtn}>
                  {el.like === true ? (
                    <img src="/images/heart_fill.png" id={el.id} />
                  ) : (
                    <img src="/images/heart.png" id={el.id} />
                  )}
                </span>
                <Coupon>
                  <CouponPrice>5만원 쿠폰</CouponPrice>
                </Coupon>
              </ImageWrapper>
              <CardTitleSection>
                <CardTitle>{el.section_title}</CardTitle>
                <Title>{el.title}</Title>
                <State>
                  <Wrapper>
                    <HeartState>
                      <IoHeart />
                      {`${el.heart}`}
                    </HeartState>
                  </Wrapper>
                  <Wrapper>
                    <LikeState>
                      <IoThumbsUp />
                      {`${el.totla_like}%`}
                    </LikeState>
                  </Wrapper>
                </State>
              </CardTitleSection>
              <Hr />
              <CardBottomSection>
                <DiscountPrice>
                  <span>{el.total_value}원</span>
                  <span className="percent">{el.discount_percent}%</span>
                </DiscountPrice>
                <InstallmentPrice>
                  {`월 ${el.value}`}
                  <span>({`${el.month}`})</span>
                </InstallmentPrice>
                <CardButtons>
                  <Button className="present">선물하기</Button>
                  <Button className="nowclass">바로 수강 가능</Button>
                </CardButtons>
              </CardBottomSection>
            </CardWrapper>
          </Cards>
        ))}
      </div>
      {slider && (
        <>
          <ArrowLeft
            onClick={e => e.stopPropagation() || slider.prev()}
            disabled={currentSlide === 0}
          />
          <ArrowRight
            onClick={e => e.stopPropagation() || slider.next()}
            disabled={currentSlide === slider.details().size - 1}
          />
        </>
      )}
    </div>
  );
};

export default Card;

const Cards = styled.div`
  margin-right: 10px;
`;

const CardWrapper = styled.div`
  color: black;
`;

const ImageWrapper = styled.div`
  color: black;
  width: 197px;
  height: 148px;
  position: relative;
  margin-bottom: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  span {
    position: absolute;
    display: flex;
    align-items: center;
    padding: 3px;
    top: 12px;
    right: 12px;

    &:hover {
      background-color: white;
      border-radius: 10px;
      opacity: 0.5;
    }
  }
`;

const Coupon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 28px;
  top: 12px;
  left: 12px;
  position: absolute;
  border-radius: 2px;
  color: white;
  font-weight: bold;
  background-color: rgb(255, 9, 60);
`;

const CouponPrice = styled.div`
  padding: 6px 8px;
  font-size: 10px;
  background-color: transparent;
`;

const CardTitleSection = styled.div`
  margin-top: 10px;
`;

const CardTitle = styled.div`
  font-size: 11px;
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 13px;
`;

const CardState = styled.div`
  display: flex;
`;

const State = styled.div`
  display: flex;
  margin-top: 5px;
  color: #bdc2c6;
`;

const HeartState = styled.div`
  color: gray;
`;

const LikeState = styled.div`
  color: gray;
`;

const Wrapper = styled.div`
  display: flex;
  margin-right: 10px;
  font-size: 11px;
`;

const Hr = styled.div`
  width: 100%;
  height: 1px;
  background-color: #efefef;
  margin: 10px 0px;
  opacity: 0.3;
`;

const CardBottomSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const DiscountPrice = styled.div`
  margin-bottom: 5px;

  span {
    font-size: 11px;
    color: rgb(133, 138, 141);
    text-decoration: line-through;

    &.percent {
      color: rgb(243, 51, 64);
      text-decoration: none;
      margin-left: 3px;
    }
  }
`;

const InstallmentPrice = styled.div`
  font-size: 13px;
  font-weight: 700;

  span {
    margin-left: 3px;
    font-size: 11px;
    font-weight: normal;
  }
`;

const CardButtons = styled.div`
  display: flex;
  margin: 4px 4px 0px 0px;
`;

const Button = styled.button`
  height: 20px;
  padding: 0px 6px;
  margin-right: 3px;
  border-radius: 3px;
  font-size: 9px;
  font-weight: 500;
  background-color: #f8f8f9;

  &.present {
    color: rgb(243, 51, 64);
  }

  &.nowclass {
    color: rgb(133, 138, 141);
  }
`;
