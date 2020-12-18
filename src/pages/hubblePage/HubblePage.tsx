import React from 'react';
import BackToTop from '../../components/backToTop/BackToTop';
import Container from '../../components/container/Container';
import ImageContainer from '../../components/imageContainer/ImageContainer';
import Spinner from '../../components/spinner/spinner';
import { useFetchHubble } from '../../hooks/useFetchHubble/useFetchHubble';

const HubblePage: React.FC = () => {
  const { data, isLoading } = useFetchHubble();
  return (
    <Container>
      {!isLoading ? (
        <>
          <ImageContainer data={data} />
          <BackToTop />
        </>
      ) : (
        <Spinner />
      )}
    </Container>
  );
};

export default HubblePage;
