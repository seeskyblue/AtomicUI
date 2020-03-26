import styled, { css } from 'styled-components';
import { getProp } from 'helper/style';
import Slot from 'component/Slot';

export const LayoutContainer = styled.div`
  ${getProp.assert('root', [
    css`
      height: 100vh;
      width: 100vw;
    `,
    css`
      height: 100%;
      width: 100%;
    `,
  ])}

  overflow-x: hidden;
  overflow-y: auto;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex: auto;

  height: 100%;
  width: 100%;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: auto;

  height: 100%;
  width: 100%;
`;

export const AsideSlot = styled(Slot)`
  order: ${getProp.map('position', { left: -1, right: 1 }, 'left')};
`;

export const HeaderSlot = styled(Slot)`
  flex: none;
  order: -1;
`;

export const ContentSlot = styled(Slot)`
  flex: auto;
  order: 0;
`;

export const FooterSlot = styled(Slot)`
  flex: none;
  order: 1;
`;
