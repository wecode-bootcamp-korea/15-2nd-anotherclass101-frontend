import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CurriculumTxt from './CurriculumTxt';

const Curriculums = () => {
  const [classInfo, setClassInfo] = useState([]);
  const [classTitle, setClassTitle] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/curriculum.json')
      .then(res => res.json())
      .then(res => {
        setClassTitle(res.Title);
        setClassInfo(res.Title.welcome);

        console.log(classInfo);
      });
  }, []);

  return (
    <CurriculumInfo>
      <img src={classTitle.img} alt={classTitle.title} />
      <Kinds>
        <Name>{classTitle.title}</Name>
        <InfoWrap>
          {classInfo.map(info => {
            return (
              <CurriculumTxt
                number={info.number}
                txt={info.txt}
                free={info.free}
              />
            );
          })}
        </InfoWrap>
      </Kinds>
    </CurriculumInfo>
  );
};

export default Curriculums;

const CurriculumInfo = styled.div`
  margin-top: 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  img {
    width: 220px;
  }
`;

const Kinds = styled.div``;

const Name = styled.p`
  font-size: 20px;
  color: #858a8d;
`;

const InfoWrap = styled.ul`
  width: 100%;
`;
