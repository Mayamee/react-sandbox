import axios from "axios";
import { useEffect, useState } from "react";

const abortController = new AbortController();

const getImages = (n) => {
  const axiosImages = axios.create({
    baseURL: "https://picsum.photos/v2/list",
    method: "GET",
    params: {
      limit: n || 1,
    },
    signal: abortController.signal,
  });
  return axiosImages;
};

export const useImages = (n) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const images = await getImages(n).request();
        setImages(images);
      } catch (error) {
        console.log(error);
      }
    })();
    return () => {
      abortController.abort();
      setImages([]);
    };
  }, [n]);
  return images.data ? images.data : [];
};
