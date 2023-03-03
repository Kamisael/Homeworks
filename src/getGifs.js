import { useEffect, useState } from "react";
// import { GetGifs } from "./components/GetGifs";

export const GetGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=PhdYYExQoGaMI7ZcInOJ3nFVE40RhuQJ&q=${category}&limit=1&offset=0&rating=g&lang=en`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const images = await GetGifs(category);
    setImages(images);
  };

  return {
    images: images,
    isLoading: false,
  };
};

