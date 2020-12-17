import styled from 'styled-components';

export const StyledContentContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
`;

export const StyledContent = styled.div`
  padding-right: inherit;
  padding-left: inherit;
  display: flex;
`;

export const StyledImage = styled.img`
  padding-left: inherit;
  width: 700px;
  height: 440px;
`;

export const StyledIFrame = styled.iframe`
  border: none;
  height: 440px;
  padding-left: inherit;
`;

export const StyledContentFooter = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;
