import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import theme, { BgImg } from '../../../styles/Theme';
import { getInfoImages } from '../../../store/CreatorsReducer';
import { ImgInfo } from '../Chapter/Title';
import { INTRODUCTION_API } from '../../../config';

const ImageUploadForm = ({ idx, handleInfoDesc, handleInfoImg }) => {
  const ImgRef = useRef();
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');
  const { infoImages } = useSelector(state => state.CreatorsReducer);
  const [dataValue, setDataValue] = useState([]);

  useEffect(() => {
    fetch(INTRODUCTION_API)
      .then(res => res.json())
      .then(res => {
        setDataValue(res.result);
      });
  }, []);

  const fileHandler = e => {
    let result = {};
    let reader = new FileReader();
    reader.onloadend = async () => {
      const base = reader.result;
      if (base) {
        result = { ...result, src: base.toString() };
        dispatch(
          getInfoImages({
            [idx]: result,
          })
        );
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      handleInfoImg(idx, e.target.files[0]);
    }
  };

  const handlePreview = () => {
    ImgRef.current.click();
  };

  const handleDescription = e => {
    handleInfoDesc(idx, e.target.value);
  };

  return (
    <Wepper>
      <div>
        <ImagesBox onClick={handlePreview}>
          {infoImages[idx] ? (
            <img src={infoImages[idx].src} alt="" />
          ) : (
            <ImgUpload>
              <img src="images/add_img_f.png" alt="" />
              <span>클래스 주제에 대한 사진, 영상</span>
            </ImgUpload>
          )}
        </ImagesBox>
        <TextArea
          onChange={handleDescription}
          vlaue={description ? description : dataValue.description}
          placeholder="사진, 영상에 대한 설명을 적어주세요"
        />
        <input
          name="imagesUpload"
          onChange={fileHandler}
          ref={ImgRef}
          type="file"
          accept="images/*"
        />
      </div>
    </Wepper>
  );
};

export default ImageUploadForm;

const Wepper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > div {
    position: relative;

    input {
      display: none;
    }
  }
`;

const ImagesBox = styled.div`
  position: relative;
  width: 270px;
  height: 520px;
  ${BgImg}
  text-align: center;
  cursor: pointer;
  border: 1px solid ${theme.lightGray};

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

const ImgUpload = styled(ImgInfo)`
  > img {
  }
`;

const TextArea = styled.textarea`
  width: 270px;
  height: 60px;
  margin-top: 5px;
  padding: 10px 0 0 10px;
  border: 1px solid ${theme.lightGray};
  color: ${theme.deepGray};
  font-size: 13px;
`;
