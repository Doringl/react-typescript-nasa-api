import React from 'react';
import Container from '../../components/container/Container';
import Content from '../../components/content/Content';
import Spinner from '../../components/spinner/spinner';
import { useFetchApod } from '../../hooks/useFetchApod/useFetchApod';

const ApodPage: React.FC = () => {
  const { data, isLoading } = useFetchApod();
  return (
    <Container>{!isLoading ? <Content data={data} /> : <Spinner />}</Container>
  );
};

export default ApodPage;
