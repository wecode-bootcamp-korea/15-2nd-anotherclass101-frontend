import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ImPencil } from 'react-icons/im';
import EditProfileForm from './EditProfileForm';
import Switch from 'react-ios-switch';
import { PROFILE, PROFILE_IMAGE } from '../../../config';
import cogoToast from 'cogo-toast';

const ProfileEdit = ({ userData }) => {
  const [checked, setChecked] = useState(false);
  const [imgEncoding, setImgEncoding] = useState('');
  const [imgFile, setImgFile] = useState(null);
  const [user, setUser] = useState(userData);

  const toggleBtn = () => {
    setChecked(!checked);
  };

  const handleChangeFile = event => {
    let reader = new FileReader();

    reader.onloadend = () => {
      const imgEncoding = reader.result;
      if (imgEncoding) {
        setImgEncoding(imgEncoding.toString());
      }
    };

    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
      setImgFile(event.target.files[0]);
    }
  };

  const handleChnageFileApi = event => {
    const selectedFile = event.target.files[0];
    const formData = new FormData();
    formData.append('file', selectedFile);
    return fetch(PROFILE_IMAGE, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          cogoToast.success('이미지 업로드 성공');
        } else {
          cogoToast.error('이미지 업로드 실패');
        }
      });
  };

  const handleProfile = event => {
    handleChangeFile(event);
    handleChnageFileApi(event);
  };

  return (
    <>
      <EditProfileWrapper>
        <label>
          <input type="file" accept="image/*" onChange={handleProfile} />
          <ProfileImageUpload>
            <ProfileImageContainer>
              <span>
                {imgEncoding ? (
                  <img src={imgEncoding}></img>
                ) : (
                  <img src={user.image}></img>
                )}
              </span>
            </ProfileImageContainer>
            <ProfileEditIcon>
              <ImPencil color="white" />
            </ProfileEditIcon>
          </ProfileImageUpload>
        </label>
      </EditProfileWrapper>
      <EditProfileForm userData={user} />
      <ReceiveConsent>
        <label>정보 수신 동의 변경</label>
        <div>
          <label>혜택 정보 받기</label>
          <Switch
            checked={checked}
            handleColor="white"
            offColor="#A8AEB3"
            onColor="#FA7E14"
            className="switch"
            onChange={toggleBtn}
          />
        </div>
      </ReceiveConsent>
    </>
  );
};

export default ProfileEdit;

const EditProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0px;

  label {
    cursor: pointer;
  }

  input[type='file'] {
    display: none;
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 88px;
  height: 88px;
`;

const ProfileImageUpload = styled.div`
  position: relative;
  width: 88px;
  height: 88px;

  span {
    width: 100%;
    height: 100%;
    border: 1px solid rgb(237, 239, 240);
    border-radius: 100%;
    display: block;
    position: relative;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileEditIcon = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  right: 0px;
  bottom: 0px;
  padding: 4px;
  background-color: rgb(27, 28, 29);
  border-radius: 14px;
`;

const ReceiveConsent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0px 16px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  label {
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    color: rgb(27, 28, 29);
  }
`;
