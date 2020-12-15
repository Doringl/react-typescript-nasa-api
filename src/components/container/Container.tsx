import React from 'react';
import { StyledContainer } from './containerStyles';

type Props = {
  children: JSX.Element;
};

const Container: React.FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
