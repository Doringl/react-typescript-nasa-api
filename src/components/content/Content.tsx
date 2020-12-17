import React from 'react';
import { PagesData } from '../../types/pagesTypes/pagesTypes';
import {
  StyledContent,
  StyledContentContainer,
  StyledContentFooter,
  StyledIFrame,
  StyledImage,
} from './contentStyles';

interface IProps {
  data: PagesData;
}

const Content = ({ data }: IProps) => {
  const { copyright, date, explanation, url, hdurl, media_type, title } = data;
  return (
    <StyledContentContainer>
      <h1>{title}</h1>
      <p>{date}</p>
      <h4>Explanation : </h4>
      <StyledContent>
        <p>{explanation}</p>
        {media_type === 'video' ? (
          <StyledIFrame src={`${url}`} title='video' allowFullScreen={true} />
        ) : (
          <StyledImage alt='img' src={`${hdurl}`} />
        )}
      </StyledContent>
      <StyledContentFooter>{copyright}</StyledContentFooter>
    </StyledContentContainer>
  );
};

export default Content;
