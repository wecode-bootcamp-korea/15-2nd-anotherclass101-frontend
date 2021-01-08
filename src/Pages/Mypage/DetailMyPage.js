import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Breadcrumbs from './Components/Breadcrumbs';
import EditProfile from './Components/EditProfile';
import DetailNav from './Components/DetailNav';

const DetailMyPage = props => {
  const location = useLocation();
  return (
    <Wrapper>
      <Container>
        <DetailNav />
        <DetailMain>
          <ProfileContainer>
            <Breadcrumbs />
            <EditProfile userData={location.state.userData} />
          </ProfileContainer>
        </DetailMain>
        <DetailFooter />
      </Container>
    </Wrapper>
  );
};
export default DetailMyPage;
