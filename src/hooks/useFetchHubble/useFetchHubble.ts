import { useEffect, useState } from 'react';
import { ImageData } from '../../types/pagesTypes/pagesTypes';

export const useFetchHubble = () => {
  const [data, setData] = useState<ImageData>({
    collection: {
      items: [
        {
          href: '',
          data: [
            {
              media_type: '',
              keywords: [''],
              date_created: '',
              description: '',
              nasa_id: '',
              center: '',
              title: '',
              description_508: '',
              secondary_creator: '',
            },
          ],
          links: [
            {
              href: '',
              render: '',
              rel: '',
            },
          ],
        },
      ],
    },
  });
  const [isLoading, setLoading] = useState<Boolean>(true);
  useEffect(() => {
    const getImageData = async () => {
      const res = await fetch(
        'https://images-api.nasa.gov/search?q=hubble&page=1&media_type=image&year_start=1920&year_end=2020'
      );
      const rawImageData = await res.json();
      setData(rawImageData);
      setLoading(false);
    };
    getImageData();
  }, []);

  return { data, isLoading };
};
