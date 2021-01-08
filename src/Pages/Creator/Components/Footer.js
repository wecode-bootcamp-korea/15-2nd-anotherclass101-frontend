import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import theme from '../../../styles/Theme';
import { INTRO_API, COVER_API, INTRODUCTION_API } from '../../../config';
const Footer = ({
  currentPage,
  info,
  coverImg,
  thumbnailImg,
  handleCurrentPage,
}) => {
  const history = useHistory();
  const [newBrand, setNewBrand] = useState('크리에이티브');
  const { brand, creatorName, category, detailCategory, level } = useSelector(
    state => state.CreatorsReducer.infomation
  );
  const { classTitle, coverBase, thumbnailBase } = useSelector(
    state => state.CreatorsReducer.titleAndCover
  );

  useEffect(() => {
    if (Number(brand) === 0) {
      setNewBrand('크리에이티브');
    } else if (Number(brand) === 1) {
      setNewBrand('커리어');
    } else if (Number(brand) === 2) {
      setNewBrand('머니');
    }
  }, [brand]);

  useEffect(() => {}, [classTitle, coverBase, thumbnailBase]);

  const handlePrev = () => {
    if (currentPage === 'last') {
      handleCurrentPage('info');
    } else if (currentPage === 'info') {
      handleCurrentPage('title');
    } else if (currentPage === 'title') {
      handleCurrentPage('intro');
    }
  };

  const handleNext = () => {
    if (currentPage === 'intro') {
      handleCurrentPage('title');
      const formData = new FormData();
      formData.append('nickname', creatorName);
      formData.append('category', newBrand);
      formData.append('sub_category', category);
      formData.append('category_detail', detailCategory);
      formData.append('level', level);

      try {
        axios.post(`${INTRO_API}`, formData, {
          headers: {
            Authorization: localStorage.getItem('TOKEN'),
          },
        });
      } catch (err) {}
    } else if (currentPage === 'title') {
      handleCurrentPage('info');
      const formData = new FormData();
      formData.append('cover_photo', coverImg);
      formData.append('title', classTitle);
      formData.append('thumbnail', thumbnailImg);

      try {
        axios.post(`${COVER_API}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: localStorage.getItem('TOKEN'),
          },
        });
      } catch (err) {
        console.log('에러발생!');
      }
    } else if (currentPage === 'info') {
      const formData = new FormData();
      formData.append('descriptions', info.one.desc);
      formData.append('descriptions', info.two.desc);
      formData.append('descriptions', info.three.desc);
      formData.append('photos', info.one.src);
      formData.append('photos', info.two.src);
      formData.append('photos', info.three.src);
      try {
        axios.post(`${INTRODUCTION_API}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: localStorage.getItem('TOKEN'),
          },
        });
      } catch (err) {
        console.log('에러발생!');
      }
      alert('클래스 생성에 성공하셨습니다 🙆‍♀️');
      history.push('/');
    }
  };

  return (
    <Wepper>
      <PrevBtn
        onClick={handlePrev}
        className={`${currentPage === 'intro' && 'hidden'}`}
      >
        이전
      </PrevBtn>
      <SaveBtn disabled={true}>저장하기</SaveBtn>
      <NextBtn onClick={handleNext}>다음</NextBtn>
    </Wepper>
  );
};

export default Footer;

const Wepper = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  ${theme.displayCenter}
  z-index: 10;
  width: calc(100% - 280px);
  height: 75px;
  padding: 18px 32px;
  border-top: 1px solid ${theme.lightGray};
  background-color: ${theme.white};
`;

export const Button = styled.button`
  padding: 0.65rem 1rem;
  border: none;
  border-radius: 3px;
  background: none;
  background: ${theme.gray};
  outline: none;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
`;

const PrevBtn = styled(Button)`
  color: ${theme.black};

  &:hover {
    background-color: ${theme.hoverBg};
  }

  .hidden {
    display: none;
  }
`;

const SaveBtn = styled(Button)`
  margin-left: auto;
  font-weight: bold;
  cursor: auto;
  color: ${theme.lightGray};
`;

const NextBtn = styled(Button)`
  margin-left: 5px;
  color: ${theme.white};
  background-color: ${theme.orange};
`;
