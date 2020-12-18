import React from 'react';
import {
  StyledHead,
  StyledAppTitle,
  StyledOptions,
  StyledOption,
} from './headStyles';

const Head: React.FC = () => {
  return (
    <StyledHead>
      <StyledAppTitle to='/'>Nasa API</StyledAppTitle>
      <StyledOptions>
        <StyledOption to='/apod'>APOD</StyledOption>
        <StyledOption to='/hubble'>Hubble Space Telescope</StyledOption>
        <StyledOption to='/exoplanet'>Exoplanet</StyledOption>
      </StyledOptions>
    </StyledHead>
  );
};

export default Head;
