import React from 'react';
import { StyledTopButton } from './backToTopStyles';

const BackToTop: React.FC = () => {
  return (
    <StyledTopButton onClick={() => window.scroll(0, 0)}>
      Back To Top
    </StyledTopButton>
  );
};

export default BackToTop;
