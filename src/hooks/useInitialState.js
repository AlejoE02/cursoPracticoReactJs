import { useState, useEffect } from "react";

const useInitialState = (API) => {
  const [videos, setVideos] = useState([]); //hook useState
  useEffect(() => {
    fetch(API) //el fetch es el llamado a la API
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);
  return videos;
};

export default useInitialState;
