import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/Theme';

const Aside = ({ currentPage, handleCurrentPage }) => {
  return (
    <Wepper>
      <div>
        {navList.map(({ url, list }, num) => (
          <div
            className={`NumberList ${currentPage === url && 'Clicked'}`}
            onClick={() => handleCurrentPage(url)}
            key={num}
          >
            <div>{num}</div>
            <span>{list}</span>
          </div>
        ))}
      </div>
    </Wepper>
  );
};

export default Aside;

const navList = [
  { url: 'intro', list: '기본 정보' },
  { url: 'title', list: '제목 및 커버' },
  { url: 'info', list: '소개' },
];

const Wepper = styled.div`
  position: fixed;
  top: 4.7rem;
  left: 0;
  width: 280px;
  height: 100vh;
  border-right: 2px solid ${theme.gray};
  background-color: ${theme.white};

  > div {
    width: inherit;
    padding-top: 15px;
  }

  .NumberList {
    display: flex;
    margin: 0.8rem 0.7rem 0 0.7rem;
    padding: 0.7rem 1rem;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: ${theme.hoverGray};
    }

    > div {
      width: 1.5rem;
      height: 1.5rem;
      ${theme.displayCenter}
      margin-right: 12px;
      background: ${theme.white};
      border: 1px solid ${theme.lightGray};
      border-radius: 6px;
      font-size: 11px;
      color: ${theme.deepGray};
      line-height: 16px;
    }

    span {
      display: inline-block;
      color: ${theme.deepGray};
      line-height: 1.5em;
      margin: 0;
      letter-spacing: -0.5px;
    }
  }

  .Clicked {
    background-color: ${theme.gray};

    div {
      border: 1px solid ${theme.black};
      color: ${theme.black};
    }

    span {
      color: ${theme.black};
      font-weight: bold;
    }
  }
`;
