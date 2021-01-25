import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link
              to={{
                pathname: '/exp',
                state: { data: i.data, links: i.href },
              }}
            >
              <StyledIMG src={`${h.href}`} alt='img' />
            </Link>
          </StyledHubbleImage>
        ))
      )}
    </StyledImageContainer>
  );
};

export default ImageContainer;
