import React from 'react';
import styled from 'styled-components';

const Breadcrumbs = props => {
  return (
    <BreadcrumbsWrapper>
      <Breadcrumb>마이페이지</Breadcrumb>
      <Slash />
      <Breadcrumb onPage>프로필 수정</Breadcrumb>
    </BreadcrumbsWrapper>
  );
};
export default Breadcrumbs;

const BreadcrumbsWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 11px;
`;

const Breadcrumb = styled.div`
  border-radius: 24px;
  background-color: rgb(237, 239, 240);
  padding: 6px 10px;
  color: ${props => (props.onPage ? 'black' : 'rgb(168, 174, 179)')};
`;

const Slash = styled.div`
  width: 1px;
  height: 17px;
  background-color: rgb(168, 174, 179);
  transform: rotate(13deg);
  margin: 0px 5px;
`;
