import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Breadcrumbs from './Components/Breadcrumbs';
import EditProfile from './Components/EditProfile';
import DetailNav from './Components/DetailNav';
import DetailFooter from './Components/DetailFooter';

const DetailMyPage = props => {
  const location = useLocation();
  return (
    <Container>
      <Wrapper>
        <DetailNav />
        <DetailMain>
          <ProfileContainer>
            <Breadcrumbs />
            <EditProfile userData={location.state.userData} />
          </ProfileContainer>
        </DetailMain>
        <DetailFooter />
      </Wrapper>
    </Container>
  );
};
export default DetailMyPage;

const Container = styled.div`
  background-color: #f8f8f9;
  height: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 640px;
  margin: 0px auto;
  background-color: #ffffff;
`;

const DetailMain = styled.main`
  display: block;
`;

const ProfileContainer = styled.div`
  position: relative;
  padding: 24px;
`;
