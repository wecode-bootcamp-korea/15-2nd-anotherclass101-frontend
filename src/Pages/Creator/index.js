import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import theme from '../../styles/Theme';
import Header from './Components/Header';
import Footer, { Button } from './Components/Footer';
import Aside from './Components/Aside';
import styled, { css } from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

import Intro from './Chapter/Intro';
import Title from './Chapter/Title';
import Info from './Chapter/Info';
import Slick from './Components/Slick';

const Creators = props => {
  const [isExit, setIsExit] = useState(false);
  const [currentPage, setCurrentPage] = useState('intro');
  const [coverImg, setCoverImg] = useState({});
  const [thumbnailImg, setThumbnailImg] = useState({});
  const [info, setInfo] = useState({
    one: {},
    two: {},
    three: {},
  });

  const history = useHistory();

  const handleExit = () => {
    setIsExit(prev => !prev);
  };

  const handleCurrentPage = page => {
    setCurrentPage(page);
  };

  const handleTogoMain = () => {
    history.push('/');
  };

  const handleCoverImg = (type, data) => {
    if (type.toString() === 'cover') {
      setCoverImg(data);
    } else if (type.toString() === 'thumbnail') {
      setThumbnailImg(data);
    }
  };

  const handleInfoImg = (type, data) => {
    if (type === 0) {
      setInfo({ ...info, one: { ...info.one, src: data } });
    } else if (type === 1) {
      setInfo({ ...info, two: { ...info.two, src: data } });
    } else if (type === 2) {
      setInfo({ ...info, three: { ...info.three, src: data } });
    }
  };

  const handleInfoDesc = (type, data) => {
    if (type === 0) {
      setInfo({ ...info, one: { ...info.one, desc: data } });
    } else if (type === 1) {
      setInfo({ ...info, two: { ...info.two, desc: data } });
    } else if (type === 2) {
      setInfo({ ...info, three: { ...info.three, desc: data } });
    }
  };

  return (
    <React.Fragment>
      <Header handleExit={handleExit} />
      <Main>
        <Aside
          currentPage={currentPage}
          handleCurrentPage={handleCurrentPage}
        />
        <Container>
          {currentPage === 'intro' && <Intro />}
          {currentPage === 'title' && <Title handleCoverImg={handleCoverImg} />}
          {currentPage === 'info' && (
            <Info
              handleInfoImg={handleInfoImg}
              handleInfoDesc={handleInfoDesc}
            />
          )}
          <Slick />
        </Container>
      </Main>
      {isExit && (
        <ExitBox>
          <PopupBox>
            <ExitClick>
              <AiOutlineClose size={24} onClick={handleExit} />
            </ExitClick>
            <BoxTitile>
              <p>크리에이터</p>님 <span>정말 나가실 거예요?</span>
            </BoxTitile>
            <BoxText>
              오늘, 마음먹은 김에 바로 페이지 작성을 완료하고 크리에이터님을
              기다리고 있는 수강생들을 만나세요! 조금만 더 힘내봐요 우리 🙆‍♀️
            </BoxText>
            <Buttons>
              <ExitButton onClick={handleTogoMain}>나갈래요</ExitButton>
              <ExitButton onClick={handleExit} primary>
                계속 작성할래요
              </ExitButton>
            </Buttons>
          </PopupBox>
        </ExitBox>
      )}

      <Footer
        info={info}
        coverImg={coverImg}
        thumbnailImg={thumbnailImg}
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
      />
    </React.Fragment>
  );
};

export default Creators;

const Main = styled.div`
  position: relative;
  top: -47px;
  max-width: calc(100vw - 580px);
  height: calc(100vh - 80px);
  margin: auto;
  z-index: 10;
  background-color: ${theme.white};
`;

const Container = styled.div`
  ${theme.displayCenter}
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const ExitBox = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  ${theme.displayCenter}
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 20;
`;

const PopupBox = styled.div`
  position: relative;
  width: 480px;
  height: 276px;
  padding: 2rem 2rem;
  border-radius: 5px;
  background-color: ${theme.white};
`;

const ExitClick = styled.div`
  position: absolute;
  top: 2.2rem;
  right: 2.2rem;
  cursor: pointer;
`;

const BoxTitile = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.4em;
  letter-spacing: -0.5px;

  p {
    display: inline-block;
  }

  span {
    display: block;
  }
`;

const BoxText = styled.div`
  padding-top: 0.8rem;
  line-height: 23px;
  letter-spacing: -0.5px;
`;

const Buttons = styled.div`
  width: inherit;
  margin: 1.5rem auto;
`;

const ExitButton = styled(Button)`
  width: 38%;
  height: auto;
  background: ${theme.gray};
  margin-right: 15px;
  font-weight: normal;

  &:hover {
    background-color: ${theme.hoverBg};
  }

  ${props =>
    props.primary &&
    css`
      width: 45%;
      background: ${theme.orange};
      color: white;

      &:hover {
        background-color: ${theme.deepOrange};
      }
    `}
`;
