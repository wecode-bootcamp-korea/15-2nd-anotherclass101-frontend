import React from 'react';
import styled from 'styled-components';
import { footerFormat } from './MypageFormat';

const DetailFooter = props => {
  return (
    <Footer>
      <FooterTop>
        {footerFormat.map((el, idx) => (
          <Wrapper>
            <Label>{el.title}</Label>
            <span>{el.content}</span>
          </Wrapper>
        ))}
      </FooterTop>
    </Footer>
  );
};
export default DetailFooter;

const Footer = styled.div`
  padding-top: 30px;
  padding-bottom: 50px;
  border-top: 1px solid rgb(237, 239, 240);
  background-color: rgb(255, 255, 255);
`;

const FooterTop = styled.div`
  padding: 8px 24px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  span {
    color: rgb(133, 138, 141);
  }
`;

const Label = styled.label`
  font-size: 15px;
  margin-bottom: 5px;
  font-weight: 700;
`;
