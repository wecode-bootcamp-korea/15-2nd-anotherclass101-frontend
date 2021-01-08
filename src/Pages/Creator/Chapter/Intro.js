import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import theme, { centerLine, SelectBox } from '../../../styles/Theme';
import styled, { css } from 'styled-components';
import { getInfomation } from '../../../store/CreatorsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { INTRO_API } from '../../../config';

const Intro = props => {
  const dispatch = useDispatch();
  const { creatorName, brand, category, detailCategory, level } = useSelector(
    state => state.CreatorsReducer.infomation
  );
  const [dataValue, setDataValue] = useState([]);

  const handleInfomation = e => {
    dispatch(
      getInfomation({
        [e.target.name]: e.target.value,
      })
    );
  };

  useEffect(() => {}, [category]);

  useEffect(() => {
    fetch(INTRO_API)
      .then(res => res.json())
      .then(res => {
        setDataValue(res.result);
      });
  }, []);

  return (
    <Wepper>
      <h2>간단하게 어떤 클래스인지 알려주세요</h2>
      <p>
        {` 언젠가 이런 걸 가르쳐봐야지 생각해본 적이 있으신가요? 간단히
      크리에이터님이 알려 줄 수 있는 카테고리를 설정해봐요. 모든 수정 사항은
      즉시 저장되니 안심해 주세요.`}
      </p>
      <CreatorsName>
        <label>크리에이터 닉네임</label>
        <Input
          value={creatorName ? creatorName : dataValue.nickname}
          type="text"
          name="creatorName"
          maxlength={12}
          onChange={handleInfomation}
          placeholder="사용할 닉네임을 적어주세요."
        />
        <span>{creatorName.length}자 / 최대 12자</span>
      </CreatorsName>
      <article>
        <label htmlFor="brand">브랜드</label>
        <Select
          name="brand"
          id="brand"
          onChange={handleInfomation}
          value={brand ? brand : dataValue.category_id}
        >
          <option value hidden disbled="true">
            클래스 브랜드를 선택해 주세요.
          </option>
          <option value={1}>
            크리에이티브 ( 미술, 음악, 요리 등 취미 클래스를 만들고 싶어요 )
          </option>
          <option value={2}>
            커리어 ( 직무, 창업, 자기계발 등 커리어 향상을 위한 클래스를 만들고
            싶어요 )
          </option>
          <option value={3}>
            머니 ( 부업, 창업, 재태크 등 수익 활동에 대한 클래스를 만들고 싶어요
            )
          </option>
        </Select>
      </article>
      <article>
        <label htmlFor="category">카테고리</label>
        <Select
          name="category"
          onChange={handleInfomation}
          value={category ? category : dataValue.sub_category_id}
          id="category"
        >
          <option value hidden disbled="true">
            클래스 분야를 선택해주세요.
          </option>
          {SUB_CATEGORY[brand].map(item => (
            <option key={item}>{item}</option>
          ))}
        </Select>
      </article>
      <article>
        <label htmlFor=" detailCategory">세부 카테고리</label>
        <Div>
          예를 들어, 가죽공예, 어반 스케치, 딥펜 캘리그라피, 다이어리 꾸미기,
          가계부 작성, 색연필 인물화, 네이버 스토어 운영, 이런 식으로요. 더
          자세한 내용을 보고 싶다면,
          <Link to="/">기본 정보 작성 가이드</Link>를 확인해 주세요.
        </Div>
        <Input
          value={detailCategory ? detailCategory : dataValue.category_detail}
          type="text"
          maxlength={12}
          name="detailCategory"
          onChange={handleInfomation}
          placeholder="예시 )  가죽공예, 어반 스케치, 딥펜 캘리그라피, 다이어리 꾸미기, 가계부 작성, 색연필 인물화, 네이버 스토어 운영"
        />
        <span> {detailCategory.length}자 / 최대 12자</span>
      </article>
      <article>
        <label htmlFor="level">난이도</label>
        <Select
          name="level"
          id="level"
          value={level ? level : dataValue.level_id}
          onChange={handleInfomation}
        >
          <option value hidden disbled="true">
            어떤 수강생에게 맞는 난이도인지 선택해주세요.
          </option>
          <option value={1}>입문자</option>
          <option value={2}>초급자</option>
          <option value={3}>중급자</option>
          <option value={4}>준전문가</option>
          <option value={5}>전문가</option>
        </Select>
      </article>
    </Wepper>
  );
};

export default Intro;

const SUB_CATEGORY = [
  [
    '공예',
    '디지털 드로잉',
    '라이프 스타일',
    '미술',
    '사진/영상',
    '요리/음료',
    '운동',
    '음악',
  ],
  [
    '글쓰기/콘텐츠',
    '데이터/개발',
    '비즈니스/생산성',
    '영상/디자인',
    '커리어/기타',
    '어학/외국어',
  ],
  [
    'SNS/콘텐츠',
    '마인드/자기계발',
    '부동산/주식/재테크',
    '온라인쇼핑몰',
    '창업',
  ],
];

const fontSize = css`
  font-size: 14px;
`;

export const Wepper = styled.div`
  ${centerLine}
  padding: 2.3rem 3rem 0 5rem;
  min-width: 1000px;

  h2 {
    margin-bottom: 1rem;
    font-size: 23px;
    font-weight: bold;
  }

  p {
    width: 550px;
    ${fontSize}
    line-height: 1.3rem;
    color: ${theme.deepGray};
  }

  label {
    margin: 2.4rem 0 0.5rem;
    padding-left: 3px;
    display: block;
    ${fontSize}
    letter-spacing: 0.5px;
    color: ${theme.black};
  }

  span {
    font-size: 12px;
    padding-left: 3px;
    color: ${theme.deepGray};
  }
`;

const CreatorsName = styled.div`
  margin-top: 2rem;
`;

export const Input = styled.input`
  ${SelectBox}
  margin-bottom: 0.1rem;
  cursor: auto;
`;
const Select = styled.select`
  ${SelectBox}
  appearance: none;
  background: url('images/option_arrow.png') no-repeat right 16px center;
  background-size: 18px;
  background-color: ${theme.white};

  option {
    padding: 3px 0;
  }
`;

export const Div = styled.div`
  width: inherit;
  height: auto;
  margin-bottom: 0.5rem;
  padding: 1rem 1rem;
  border-radius: 3px;
  line-height: 1.2rem;
  ${fontSize}
  background-color: ${theme.gray};

  ${props =>
    props.primary &&
    css`
      margin-top: 1rem;
    `}

  a {
    padding: 0 3px;
    color: #82bfd4;

    &:hover {
      text-decoration: underline;
    }
  }
`;
