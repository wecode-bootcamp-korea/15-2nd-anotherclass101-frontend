import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ImgInfo } from '../Chapter/Title';
import theme, { BgImg } from '../../../styles/Theme';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Slick = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const { creatorName, category, detailCategory, level } = useSelector(
    state => state.CreatorsReducer.infomation
  );
  const { cover, classTitle } = useSelector(
    state => state.CreatorsReducer.titleAndCover
  );

  const infoImages = useSelector(state => state.CreatorsReducer.infoImages);

  useEffect(() => {}, [infoImages]);

  const SlickCurrentSection = () => {
    switch (currentSection) {
      case 1:
        return (
          <Card className="CoverCard">
            <div>
              <span>by. {creatorName ? creatorName : '크리에이터님'}</span>
              <span>{category}</span>
              <span>
                {detailCategory
                  ? detailCategory
                  : '세부 카테고리를 입력해주세요'}
              </span>
              <span>{level}</span>
              <h3>{classTitle}</h3>
            </div>
          </Card>
        );
      case 2:
        return (
          <Card className="FirstCard">
            <div>
              <div>{infoImages[0].discription}</div>
              <span>프로 크리에이트 사용법</span>
              <span>인물 드로잉</span>
            </div>
          </Card>
        );
      case 3:
        return (
          <Card className="SecondCard">
            <div>
              <div>{infoImages[1].discription}</div>
              <span>클래스 설명을 입력 해주세요</span>
            </div>
          </Card>
        );
      case 4:
        return (
          <Card className="ThridCard">
            <CardName>
              안녕하세요 {creatorName ? creatorName : '크리에이터'} 입니다.
            </CardName>
          </Card>
        );
      default:
        return;
    }
  };

  const handlePrev = () => {
    if (currentSection > 1) {
      setCurrentSection(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentSection < 4) {
      setCurrentSection(prev => prev + 1);
    }
  };

  return (
    <Wepper
      cover={cover}
      currentSection={currentSection}
      infoImages={infoImages}
    >
      <FixedImg>
        <PositonRel>
          <BoxIcon>
            <ImgInfo primary>
              <img src="images/add_img_f.png" alt="" />
            </ImgInfo>
            <PreviewSection>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </PreviewSection>
            <BtnArrow>
              <AiOutlineLeft onClick={handlePrev} className="PrevBtn" />
              <AiOutlineRight onClick={handleNext} className="NextBtn" />
            </BtnArrow>
            <BgShadow />
            <SlickSection>
              <SlickCurrentSection />
            </SlickSection>
          </BoxIcon>
        </PositonRel>
      </FixedImg>
    </Wepper>
  );
};

export default Slick;

const Wepper = styled.div`
  position: relative;
  top: 0;
  left: 1.5rem;
  min-width: 400px;
  height: inherit;

  .CoverCard {
    background-image: url(${({ cover }) => cover});
  }
  .FirstCard {
    background-image: url(${({ infoImages }) => infoImages[0].src});
  }
  .SecondCard {
    background-image: url(${({ infoImages }) => infoImages[1].src});
  }
  .ThridCard {
    background-image: url(${({ infoImages }) => infoImages[2].src});
  }
`;

const FixedImg = styled.div`
  position: fixed;
  top: 150px;
  margin: auto;
  width: 360px;
  height: 640px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px, rgba(0, 0, 0, 0.03) 0px 3px 6px,
    rgba(0, 0, 0, 0.05) 0px 8px 12px, rgba(0, 0, 0, 0.06) 0px 12px 18px;
  overflow: hidden;
`;

const PositonRel = styled.div`
  position: relative;
  height: 100%;
`;

const BoxIcon = styled.div`
  position: relative;
  height: inherit;
  overflow: hidden;
  font-size: 14px;
  color: rgb(27, 28, 29);
  line-height: 20px;
  letter-spacing: -0.15px;
`;

const PreviewSection = styled.div`
  position: absolute;
  left: 1rem;
  right: 1rem;
  top: 0.8rem;
  display: flex;
  justify-content: space-between;
  z-index: 30;

  span {
    flex: 1 1 0%;
    height: 2px;
    margin-right: 2px;
    background-color: rgb(255, 255, 255);
    opacity: 0.3;
  }

  span:nth-of-type(${props => props.currentSection}) {
    opacity: 1;
  }
`;

const SlickSection = styled.div`
  position: relative;
  z-index: 10;
  width: calc(100% - 48px);
  overflow-wrap: break-word;

  span {
    height: 28px;
    margin: 2px;
    padding: 6px 8px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: normal;
    font-size: 11px;
    line-height: 16px;
    color: white;
    background-color: #000;
  }

  h3 {
    padding-top: 10px;
    color: ${theme.lightGray};
    font-size: 26px;
    font-weight: 500;
    text-align: left;
  }
`;

const Card = styled.div`
  position: sticky;
  top: 0px;
  left: 0px;
  width: 380px;
  height: 700px;
  ${BgImg}

  > div {
    width: 330px;
    position: absolute;
    left: 15px;
    bottom: 70px;
    overflow: hidden;
  }
`;

const CardName = styled.div`
  width: 280px;
  height: 60px;
  position: absolute;
  top: 290px;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: 17px;
  font-size: 20px;
  color: white;
`;

const BtnArrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 20;
  font-size: 1.5em;
  cursor: pointer;
  color: ${theme.lightGray};

  > * {
    position: absolute;
    transform: translateY(-70%);

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 3px;
    }
  }

  .PrevBtn {
    left: 0.7rem;
  }

  .NextBtn {
    right: 0.7rem;
  }
`;

const BgShadow = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 280px;
  background: linear-gradient(rgba(27, 28, 29, 0) 0%, rgb(27, 28, 29) 100%);
`;
