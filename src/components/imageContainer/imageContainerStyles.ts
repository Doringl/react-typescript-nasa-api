import styled from 'styled-components';

export const StyledImageContainer = styled.div`
  columns: 5;
  column-gap: 4px;
  @media (max-width: 1200px) {
    columns: 4;
  }
  @media (max-width: 992px) {
    columns: 3;
  }
  @media (max-width: 768px) {
    columns: 2;
  }
`;

export const StyledHubbleImage = styled.div`
  .grid {
    display: inline-block;
    margin-bottom: 4px;
    position: relative;
  }
`;

export const StyledIMG = styled.img`
  width: 100%;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
