import styled from 'styled-components';
import { getTheme } from 'helper/style';
import Button from 'component/Button';
import Overlay from 'component/Overlay';

import config from './config';

export const DialogOverlay = Overlay;

export const DialogBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);

  width: 560px;

  background: ${getTheme('color.surfaceLight')};
  border-radius: 4px;
  box-shadow: ${getTheme('shadow.24')};
`;

export const TitleBox = styled.div`
  box-sizing: border-box;
  max-height: ${config.title.fontSize *
    config.title.lineHeight *
    config.title.maxRows +
    config.title.padding.vertical * 2}px;
  width: 100%;
  padding: 12px 24px;

  font-size: ${config.title.fontSize}px;
  line-height: ${config.title.lineHeight};
  font-weight: bold;

  overflow: hidden;
`;

export const TitleContent = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const MessageBox = styled.div`
  padding: 16px 24px 24px;

  font-size: ${config.content.fontSize}px;
  line-height: ${config.content.lineHeight};
`;

export const ChildrenBox = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
`;

export const ActionBox = styled.div`
  display: flex;
  flex-flow: row-reverse nowrap;

  box-sizing: border-box;
  height: 52px;
  padding: 8px;
`;

export const ActionButton = styled(Button)`
  text-transform: uppercase;
`;
