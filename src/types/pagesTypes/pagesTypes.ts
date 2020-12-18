export type ApodData = {
  copyright?: String;
  date: String;
  explanation: String;
  url: String;
  hdurl: String;
  media_type: String;
  title: String;
};

export type ImageData = {
  collection: {
    items: [
      {
        href: string;
        data: [
          {
            media_type: String;
            keywords: [String];
            date_created: String;
            description: String;
            nasa_id: String;
            center: String;
            title: String;
            description_508: String;
            secondary_creator: String;
          }
        ];
        links: [
          {
            href: String;
            render: String;
            rel: String;
          }
        ];
      }
    ];
  };
};
