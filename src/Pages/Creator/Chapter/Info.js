import React from 'react';
import styled from 'styled-components';
import { Wepper, Div } from './Intro';
import ImageUploadFrom from '../Components/ImageUploadForm';
import theme from '../../../styles/Theme';
import { Link } from 'react-router-dom';

const Info = ({ handleInfoDesc, handleInfoImg }) => {
  return (
    <Wepper>
      <h2>어떤 걸 알려주실 수 있나요?</h2>
      <p>
        {` 클래스를 통해 알려주실 것과 완성할 수 있는 것들을 설명해 주세요.`}
      </p>
      <Div primary>
        어떻게 설명하면 좋을지 잘 모르겠나요?
        <Link to="/">클래스 소개 가이드</Link>를 보고 답을 얻어보세요.
      </Div>
      <FormList>
        <ImageUploadFrom
          handleInfoDesc={handleInfoDesc}
          handleInfoImg={handleInfoImg}
          idx={0}
        />
        <ImageUploadFrom
          handleInfoDesc={handleInfoDesc}
          handleInfoImg={handleInfoImg}
          idx={1}
        />
        <ImageUploadFrom
          handleInfoDesc={handleInfoDesc}
          handleInfoImg={handleInfoImg}
          idx={2}
        />
      </FormList>
    </Wepper>
  );
};

export default Info;

const FormList = styled.form`
  display: grid;
  ${theme.displayCenter}
`;
