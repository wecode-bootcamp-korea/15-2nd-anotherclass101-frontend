import React from 'react';

const Breadcrumbs = props => {
  return (
    <>
      <Breadcrumbs>마이페이지</Breadcrumbs>
      <Slash />
      <Breadcrumbs>프로필 수정</Breadcrumbs>
    </>
  );
};
export default Breadcrumbs;
