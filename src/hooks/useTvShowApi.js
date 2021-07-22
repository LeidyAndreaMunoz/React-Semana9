import  React from 'react';

const useTvShowsApi = (API) => {
  const [videos, setVideos] = React.useState([]);
  React.useEffect(() => {
      fetch(API)
      .then(response => response.json())
      .then((data) => setVideos(data));
  }, []);
  return videos;
};

export default useTvShowsApi;