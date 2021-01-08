import React, { useState, useRef, useEffect } from 'react';
import { getTitleAndCover } from '../../../store/CreatorsReducer';
import styled, { css } from 'styled-components';
import { Wepper, Input, Div } from './Intro';
import theme, { centerLine } from '../../../styles/Theme';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { COVER_API } from '../../../config';

const Title = ({ handleCoverImg }) => {
  const [DataImg, setDataImg] = useState([]);
  const [ThumbnailImg, setThumbnailImg] = useState([]);
  const [dataValue, setDataValue] = useState([]);
  const dispatch = useDispatch();
  const coverImg = useRef();
  const thumbnailImg = useRef();
  const { cover, thumbnail, classTitle } = useSelector(
    state => state.CreatorsReducer.titleAndCover
  );

  useEffect(() => {
    fetch('/data/DataImg.json')
      .then(res => res.json())
      .then(res => {
        setDataImg(res.DataImg);
        setThumbnailImg(res.ThumbnailImg);
      });
  }, []);

  useEffect(() => {
    fetch(COVER_API)
      .then(res => res.json())
      .then(res => {
        setDataValue(res.result);
      });
  }, []);

  const handleInfomation = e => {
    dispatch(
      getTitleAndCover({
        [e.target.name]: e.target.value,
      })
    );
  };

  const fileHandler = e => {
    let reader = new FileReader();
    reader.onloadend = () => {
      const base = reader.result;
      if (base) {
        dispatch(
          getTitleAndCover({
            [e.target.name]: base.toString(),
          })
        );
      }
    };
    e.target.files[0] && reader.readAsDataURL(e.target.files[0]);
    handleCoverImg([e.target.name], e.target.files[0]);
  };

  const imgPreviewUpload = item => {
    item.current.click();
  };

  const ChangeWidth = {
    width: `300px`,
    lineHeight: `2rem`,
  };

  const FontChange = {
    fontSize: `14px`,
    fontWeight: `bold`,
    color: `${theme.black}`,
    marginBottom: `1rem`,
  };

  const FontBox = {
    color: `${theme.black}`,
    marginBottom: `1rem`,
    letterSpacing: `-0.8px`,
  };

  return (
    <Wepper>
      <h2 style={ChangeWidth}>
        클래스의 컨셉과 잘 드러난 제목과 이미지를 보여주세요
      </h2>
      <p>
        {` 감성적이면서도 클래스를 잘 표현하는 제목과 이미지를 등록해 주세요.`}
      </p>
      <FormData>
        <CoverBox>
          <Img>
            <label>커버이미지</label>
            <ImageWrap>
              <LabelImg>
                <input
                  name="cover"
                  ref={coverImg}
                  onChange={fileHandler}
                  type="file"
                />
                {cover ? (
                  <img
                    name={cover}
                    src={cover}
                    onChange={handleInfomation}
                    alt="cover"
                  />
                ) : (
                  <ImgInfo onClick={() => imgPreviewUpload(coverImg)}>
                    <img src="images/add_img_f.png" alt="" />
                    <span>이미지를 첨부해주세요.</span>
                  </ImgInfo>
                )}
              </LabelImg>
            </ImageWrap>
          </Img>
          <ClassName>
            <label htmlFor="classTitle">클래스 제목</label>
            <Input
              value={classTitle ? classTitle : dataValue.title}
              name="classTitle"
              type="text"
              onChange={handleInfomation}
              placeholder="컨셉이 잘 드러나는 클래스의 제목을 지어주세요."
            />
            <InforBox>
              <TextBox>
                <p style={FontChange}>
                  어떤 사진과 제목이 좋을지 고민이신가요?
                </p>
                <p style={FontBox}>
                  감성적이면서도 직관적인 제목이 좋아요! 두 가지 모두 표현하는
                  것이 어렵다면 <Link to="/">제목 가이드</Link>를 참고해 주세요.
                </p>
                <p style={FontBox}>
                  커버 이미지가 첫 인상을 결정해요. 어떤 이미지가 좋을지
                  <Link to="/">커버 이미지 가이드</Link>를 확인해 보세요!
                </p>
                <ul>
                  {DataImg.map(({ url, title }, id) => (
                    <li key={id}>
                      <img src={url} alt={title} />
                    </li>
                  ))}
                </ul>
              </TextBox>
            </InforBox>
          </ClassName>
        </CoverBox>
        <Thumbnail>
          <Img>
            <label>썸네일 이미지</label>
            <ImageWrap primary>
              <LabelImg>
                <input
                  name="thumbnail"
                  ref={thumbnailImg}
                  onChange={fileHandler}
                  type="file"
                />
                {thumbnail ? (
                  <img
                    name={thumbnail}
                    src={thumbnail}
                    onChange={handleInfomation}
                    alt="thumbnail"
                  />
                ) : (
                  <ImgInfo onClick={() => imgPreviewUpload(thumbnailImg)}>
                    <img src="images/add_img_f.png" alt="" />
                    <span>이미지를 첨부해주세요.</span>
                  </ImgInfo>
                )}
              </LabelImg>
            </ImageWrap>
          </Img>
          <InforBox primary>
            <TextBox>
              <p style={FontChange}>썸네일 이미지가 어디에 사용되나요?</p>
              <p style={FontBox}>
                썸네일 이미지는 아래와 같이 홈페이지의 메인, 수요 조사 메인
                페이지에서 보이는 이미지예요. 커버 이미지와 다르게 세로형이 아닌
                가로형 이미지에 최적화돼있습니다.
              </p>
              <ul>
                {ThumbnailImg.map(({ url, title }, id) => (
                  <li key={id}>
                    <img src={url} alt={title} />
                    <span></span>
                    <span></span>
                  </li>
                ))}
              </ul>
            </TextBox>
          </InforBox>
        </Thumbnail>
      </FormData>
    </Wepper>
  );
};

export default Title;

const FormData = styled.form`
  ${centerLine}
`;

const CoverBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 600px;
`;
const Thumbnail = styled(CoverBox)`
  height: 450px;
`;

const Img = styled.div`
  width: 300px;
  margin-right: 1.5rem;
`;

export const ImageWrap = styled.div`
  position: relative;
  display: flex;
  width: 295px;
  height: 520px;
  border: 1px solid ${theme.lightGray};
  overflow: hidden;
  border-radius: 3px;
  color: ${theme.gray};

  ${props =>
    props.primary &&
    css`
      height: 220px;
    `}
`;
export const LabelImg = styled.label`
  ${centerLine}
  text-align: center;
  cursor: pointer;

  > input {
    display: none;
  }

  > img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 0;
    height: inherit;
    width: inherit;
    object-fit: cover;
  }
`;

export const ImgInfo = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: inherit;
  padding: 16px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    flex: 0 0 auto;
    width: 72px;
    height: 72px;
  }

  span {
    flex: 0 0 auto;
    white-space: pre-wrap;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.15px;
    color: ${theme.deepGray};
    margin: 8px 0px;
  }

  ${props =>
    props.primary &&
    css`
      ${theme.displayCenter}
      height: 100%;
      background-color: rgb(62, 64, 66);
    `}
`;

const ClassName = styled.div`
  width: 600px;
`;
const InforBox = styled(ClassName)`
  ul {
    display: flex;
    justify-content: space-around;
    align-items: baseline;
  }
  img {
    width: 178px;
    height: auto;
  }

  ${props =>
    props.primary &&
    css`
      margin-top: 3.4rem;

      span {
        display: inline-block;
        width: 90%;
        height: 15px;
        margin: 5px 0 0 4px;
        border-radius: 3px;
        background-color: ${theme.hoverGray};
      }
    `}
`;

const TextBox = styled(Div)`
  margin-top: 0.5rem;
`;
