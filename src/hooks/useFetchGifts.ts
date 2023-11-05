/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { getGifs, gifsProps } from "../helpers/getGifts";

export const useFetchGifts = (category: string) => {
  const [images, setImages] = useState<gifsProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages as unknown as gifsProps[]);
    setIsLoading(false);
  };
  useEffect(() => {
    getImages();
  }, []);
  return {
    images,
    isLoading,
  };
};
