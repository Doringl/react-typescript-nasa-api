import React from 'react';
import Container from '../../components/container/Container';
import {
  StyledDarkBanner,
  StyledInnerContainer,
  StyledTitle,
  StyledSubTitle,
  StyledSubComment,
  StyledGetStarted,
  StyledLink,
} from './homePageStyles';

const HomePage: React.FC = () => {
  return (
    <Container>
      <StyledDarkBanner>
        <StyledInnerContainer>
          <StyledTitle>Nasa API</StyledTitle>
          <StyledSubTitle>
            Nasa API
            <StyledSubComment>
              To learn and see the astronomy photo of the day ...
            </StyledSubComment>
          </StyledSubTitle>
          <StyledGetStarted>
            <StyledLink className='link' to='/apod'>
              Astronomy Photo Of The Day
            </StyledLink>
          </StyledGetStarted>
        </StyledInnerContainer>
      </StyledDarkBanner>
    </Container>
  );
};

export default HomePage;
