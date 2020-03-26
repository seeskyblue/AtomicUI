import styled from 'styled-components';
import { getTheme } from 'helper/style';

export const INPUT_PADDING_ASIDE = 16;

export const InputBox = styled.div`
  position: relative;
  display: block;

  box-sizing: border-box;
  height: 56px;
`;

export const InputNode = styled.input`
  display: block;

  box-sizing: border-box;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 12px ${INPUT_PADDING_ASIDE}px 14px;

  border: none;
  background: none;
  caret-color: ${getTheme('color.primary')};
  outline: none;
`;
