import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import SideInfo from './Components/SideInfo';
import Curriculums from './Components/CurriculumList';

const Detail = () => {
  const [nav, setNav] = useState([]);

  useEffect(() => {
    fetch('/data/detailNav.json')
      .then(res => res.json())
      .then(res => {
        setNav(res.detailnav);
      });
  }, []);

  return (
    <DetailWrap>
      <SideInfo />
      <Content>
        <img
          src="https://cdn.pixabay.com/photo/2015/09/28/16/48/signature-962355__340.jpg"
          alt=""
        />
        <DetailMenu>
          {nav.map(category => {
            return <li>{category}</li>;
          })}
        </DetailMenu>
        <ImgWrap>
          <img src="/images/detail1.png" alt="101 페스티벌 최대 61% 할인" />
        </ImgWrap>

        {/* 클래스소개 */}
        <Section>
          <H1>
            태피스트리 위빙을 이용해
            <br /> <Bold>총 5개의 작품</Bold> 만들기
          </H1>
          <H2>
            한 작품을 만들어보는 데에 <Bold>4-18시간</Bold> 정도가 소요됩니다.
          </H2>
        </Section>

        {/* 커리큘럼 */}
        <Section>
          <H1>
            <Bold>커리큘럼</Bold>
          </H1>
          <H3>
            클래스를 신청하신 분들이 배우고 있는 커리큘럼입니다. 콘텐츠는 배우기
            쉽게 영상, 수업노트, 첨부파일로 구성되어있습니다.
          </H3>
          <Curriculums />
          <Curriculums />
          <Curriculums />
        </Section>

        {/* 크리에이터 */}
        <Section>
          <H1>
            크리에이터
            <br />
            <Bold>엔원 투엘엘 위빙</Bold> 입니다.
          </H1>
        </Section>
      </Content>
    </DetailWrap>
  );
};

export default Detail;

const DetailWrap = styled.div`
  position: relative;
  width: 1176px;
  margin: 0 auto;
  color: #1b1c1d;
`;

const Content = styled.div`
  width: 750px;
`;
const DetailMenu = styled.ul`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #efefef;
  padding: 14px 0;
  li {
    color: #858a8d;
    font-size: 14px;
    line-height: 30px;
    margin-right: 24px;
  }
`;

const ImgWrap = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

const Bold = styled.p`
  display: inline-block;
  font-weight: bold;
`;

const Section = styled.div`
  padding-bottom: 48px;
  width: 100%;
  border-bottom: 1px solid #eee;
`;

const H1 = styled.p`
  margin-top: 48px;
  font-size: 24px;
  line-height: 34px;
`;

const H2 = styled.p`
  margin-top: 12px;
  font-size: 16px;
  line-height: 24px;
`;

const H3 = styled.p`
  margin: 12px 0 16px;
  font-size: 14px;
  line-height: 24px;
`;
