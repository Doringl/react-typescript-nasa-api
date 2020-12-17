import React from 'react';
import { StyledSpinnerContainer, StyledSpinnerOverlay } from './spinnerStyles';

const Spinner: React.FC = () => {
  return (
    <StyledSpinnerOverlay>
      <StyledSpinnerContainer />
    </StyledSpinnerOverlay>
  );
};

export default Spinner;
