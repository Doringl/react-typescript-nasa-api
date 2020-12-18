import { useEffect, useState } from 'react';
import { ApodData } from '../../types/pagesTypes/pagesTypes';

export const useFetchApod = () => {
  const initialValues = {
    copyright: '',
    date: '',
    explanation: '',
    url: '',
    hdurl: '',
    media_type: '',
    title: '',
  };
  const [data, setData] = useState<ApodData>(initialValues);
  const [isLoading, setLoading] = useState<Boolean>(true);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=2m7fwrtUFQiYaZEy2hldxm29bBlAIswXrEjZ2k6E&hd=true`
      );
      const {
        copyright,
        date,
        explanation,
        url,
        hdurl,
        media_type,
        title,
      } = await res.json();
      setData({ copyright, date, explanation, url, hdurl, media_type, title });
      setLoading(false);
    };

    getData();
  }, []);
  return { data, isLoading };
};
