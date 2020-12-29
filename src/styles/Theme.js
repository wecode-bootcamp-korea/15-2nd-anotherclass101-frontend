import styled, { css } from 'styled-components';

const displayCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
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

export default theme;
