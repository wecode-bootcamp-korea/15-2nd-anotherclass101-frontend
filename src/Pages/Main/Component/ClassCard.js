import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import theme from './../../../styles/Theme';

const ClassCard = ({
  key,
  img,
  alt,
  brand,
  creator,
  title,
  price,
  heart,
  thumbsup,
  coupon,
}) => {
  let history = useHistory();

  const goToDetail = () => {
    history.push('/Detail/');
  };
  const [likeIt, setLikeIt] = useState(true);

  const changeHeart = () => {
    setLikeIt(!likeIt);
  };

  const PRICE = Math.floor(price).toLocaleString('en');
  const DISCOUNT = Math.floor(price / 15).toLocaleString('en');

  return (
    <ClassCardWrap key={key}>
      <ImgWrap>
        {coupon ? <Coupon>{coupon} 쿠폰</Coupon> : null}
        <Heart onClick={changeHeart}>
          {likeIt ? <i className="far fa-heart" /> : <i class="fas fa-heart" />}
        </Heart>
        <img src={img} alt={alt} />
      </ImgWrap>

      <TxtWrap>
        <span>{brand}</span> &middot; <span>{creator}</span>
        <p onClick={goToDetail}>{title}</p>
        <Like>
          <i className="fas fa-heart" onClick={changeHeart} />
          <span>{likeIt ? Number(heart) : Number(heart) + 1}</span>
        </Like>
        {thumbsup ? (
          <Good>
            <i class="fas fa-thumbs-up" /> <span>24%</span>
          </Good>
        ) : null}
      </TxtWrap>

      {price ? (
        <ClassCardPrice>
          <Discount>
            <strike>{PRICE}원 </strike>
            {15}%
          </Discount>
          <Price>
            월 {DISCOUNT} 원<p>(5개월)</p>
          </Price>

          {thumbsup ? (
            <div>
              <RedButton>선물하기</RedButton>
              <GrayButton>바로 수강 가능</GrayButton>
            </div>
          ) : (
            <RedButton>3.3(수) 부터 수강 가능</RedButton>
          )}
        </ClassCardPrice>
      ) : (
        <div>
          <CheerUp>
            <div>
              응원 마감까지
              <span> 3일 남음</span>
            </div>
            <CheerupBtn>응원하기</CheerupBtn>
          </CheerUp>

          <Success>
            미션 답변 작성 <span> 9분 전</span>
          </Success>
        </div>
      )}
    </ClassCardWrap>
  );
};

export default ClassCard;

const ClassCardWrap = styled.li`
  display: inline-block;
  margin-right: 25px;
  width: 276px;
`;

const ImgWrap = styled.div`
  position: relative;
  width: 276px;
  height: 206px;
  overflow: hidden;
  border-radius: 3px;

  img {
    width: 276px;
    height: 207px;
  }
  img:hover {
    transform: scale(1.2);
    transition: 0.3s;
  }
`;

const Heart = styled.span`
  position: absolute;
  z-index: 10;
  top: 10px;
  right: 10px;
  .fa-heart {
    color: #fff;
    font-size: 20px;
  }
`;

const Coupon = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  width: 67px;
  height: 28px;
  background: #ff313e;
  border-radius: 3px;
  color: #fff;
  font-size: 11px;
  text-align: center;
  line-height: 28px;
  font-weight: bold;
`;

const TxtWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid ${theme.gray};
  padding-bottom: 6px;
  span {
    display: inline-block;
    margin-top: 4px;
    vertical-align: middle;
    font-size: 11px;
    line-height: 16px;
    color: rgb(27, 28, 25);
    font-weight: 600;
  }
  p {
    margin: 8px 0;
    font-size: 14px;
    line-height: 20px;
    color: black;
    cursor: pointer;
  }
  i {
    font-size: 11px;
    color: rgb(133, 138, 141);
    margin-right: 2px;
  }
`;

const Like = styled.div`
  display: inline-block;
  span {
    font-size: 11px;
    color: rgb(133, 138, 141);
    margin-right: 10px;
  }
`;

const ClassCardPrice = styled.div`
  padding-top: 6px;
  line-height: 22px;
  width: 276px;
`;

const Discount = styled.div`
  font-size: 12px;
  color: #f33340;
  font-weight: 600;

  strike {
    color: rgb(133, 138, 141);
    margin-right: 7px;
    text-decoration: line-through;
  }
`;

const Price = styled.div`
  font-size: 15px;
  color: #1b1c1d;
  font-weight: bold;

  p {
    display: inline-block;
    font-size: 11px;
    font-weight: normal;
    margin-left: 7px;
  }
`;

const Button = styled.button`
  font-size: 10px;
  font-weight: bold;
  padding: 6px;
  background-color: ${theme.gray};
  border-radius: 3px;
`;

const RedButton = styled(Button)`
  color: #f33340;
  margin-right: 5px;
`;

const GrayButton = styled(Button)`
  color: #858a8d;
`;

const Success = styled(Discount)`
  margin-right: 10px;
  display: inline-block;
  color: #858a8d;
  font-size: 10px;

  i {
    color: #f33340;
  }
  span {
    margin-left: 3px;
    font-size: 10px;
    color: #f33340;
    font-weight: 600;
  }
`;

const CheerUp = styled.div`
  width: 276px;

  div {
    padding: 15px 0;
    font-size: 11px;
    color: #858a8d;
    span {
      color: black;
    }
  }
`;

const CheerupBtn = styled.button`
  border-radius: 3px;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  color: #ff4d00;
  background-color: #ffe4dd;
  line-height: 40px;
  &:hover {
    background-color: #ffc8ba;
  }
`;

const Good = styled.div`
  display: inline-block;
  span {
    color: rgb(133, 138, 141);
  }
`;
