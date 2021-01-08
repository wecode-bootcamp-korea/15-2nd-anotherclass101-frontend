import styled, { css } from 'styled-components';

export const centerLine = css`
  width: inherit;
  height: inherit;
  margin: auto;
`;
const displayCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const BgImg = css`
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const displayColumnAndStart = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const displayColumn = css`
  display: flex;
  flex-direction: column;
`;
const theme = {
  black: '#222',
  hoverBg: '#dddde1',
  orange: '#ff922b',
  white: '#fff',
  gray: '#f8f8f9',
  lightGray: 'rgb(237, 239, 240)',
  hoverGray: '#e6e6e6',
  deepGray: 'rgb(133, 138, 141)',
  width: '100%',
  displayCenter,
  displayColumnAndStart,
  displayColumn,
};


export const SelectBox = css`
  width: 100%;
  height: 45px;
  padding: 3px 1rem;
  border: 1px solid ${theme.lightGray};
  font-size: 14px;
  letter-spacing: -1px;
  color: ${theme.deepGray};
`;


export default theme;
