import React from 'react';
import styled from 'styled-components';

const CurriculumTxt = ({ number, txt, free }) => {
  return (
    <CuriTxt>
      <div>
        <Number>{number}</Number>
        <Txt>{txt}</Txt>
      </div>

      {free && (
        <Free>
          무료공개 <i class="fas fa-play"></i>
        </Free>
      )}
    </CuriTxt>
  );
};

export default CurriculumTxt;

const CuriTxt = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

const Number = styled.span`
  display: inline-block;
  font-size: 11px;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #eeeff0;
  text-align: center;
  line-height: 20px;
`;

const Txt = styled.span`
  margin-left: 16px;
  font-size: 14px;
  line-height: 20px;
`;

const Free = styled.button`
  color: white;
  background: #3f4042;
  font-size: 9px;
  padding: 5px;
  border-radius: 3px;
  i {
    margin-left: 5px;
    font-size: 3px;
  }
`;
