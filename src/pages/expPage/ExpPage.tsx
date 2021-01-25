import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../../components/container/Container';
import { ExpData } from '../../types/pagesTypes/pagesTypes';

const ExpPage: React.FC = () => {
  const location = useLocation<ExpData>();
  const data = location.state.data[0];
  const [originalImage, setOriginalImage] = useState<string>();
  const link = location.state.links;
  useEffect(() => {
    const getImage = async () => {
      const res = await fetch(link);
      const ImageArray = await res.json();
      setOriginalImage(ImageArray[0]);
    };

    getImage();
  }, [link]);
  return (
    <Container>
      <>
        <h1>{data.title}</h1>
        <div>
          <p>{data.description}</p>
          <img src={originalImage} alt='img' />
        </div>
      </>
    </Container>
  );
};

export default ExpPage;
