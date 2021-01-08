import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../styles/Theme';

const Header = ({ handleExit }) => {
  return (
    <Wepper>
      <div className="Header">
        <Link to="/">
          <img src="https://class101.net/images/101-logo.svg" alt="logo" />
        </Link>
        <span>수요조사 시작하기</span>
        <p>0% 완료</p>
        <button onClick={handleExit} className="btn">
          나가기
        </button>
      </div>
    </Wepper>
  );
};

export default Header;

const Wepper = styled.div`
  width: 100vw;
  height: 4.7rem;
  padding: 1.3rem 1.5rem;
  position: fixed;
  top: 0;
  z-index: 30;
  background-color: ${theme.white};
  border-bottom: 3px solid ${theme.lightGray};

  .Header {
    display: flex;
    align-items: center;

    img {
      width: 40px;
      height: auto;
    }

    span {
      padding-left: 10px;
      letter-spacing: -0.5px;
    }

    p {
      padding-left: 1rem;
      font-size: 0.9em;
      font-weight: bold;
      letter-spacing: -1px;
      color: ${theme.orange};
    }

    .btn {
      position: absolute;
      right: 3rem;
      padding: 0.6rem 1rem;
      border-radius: 3px;
      border: none;
      font-size: 14px;
      background: ${theme.gray};
      outline: none;
      cursor: pointer;

      &:hover {
        background-color: ${theme.hoverBg};
      }
    }
  }
`;
