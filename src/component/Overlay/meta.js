import styled from 'styled-components';

export const OverlayBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  color: rgba(0, 0, 0, 0.32);

  &::before {
    display: block;
    content: '';

    height: 100%;
    width: 100%;

    background: currentColor;
  }
`;
