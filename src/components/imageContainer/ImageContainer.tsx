import React from 'react';
import { ImageData } from '../../types/pagesTypes/pagesTypes';
import {
  StyledHubbleImage,
  StyledImageContainer,
  StyledIMG,
} from './imageContainerStyles';

interface IProps {
  data: ImageData;
}

const ImageContainer: React.FC<IProps> = ({ data }) => {
  return (
    <StyledImageContainer>
      {data.collection.items.map((i) =>
        i.links.map((h) => (
          <StyledHubbleImage key={i.href}>
            <StyledIMG src={`${h.href}`} alt='img' />
          </StyledHubbleImage>
        ))
      )}
    </StyledImageContainer>
  );
};

export default ImageContainer;
