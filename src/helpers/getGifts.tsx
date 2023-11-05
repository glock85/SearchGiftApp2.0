import { DataResponse } from "../types/responseGift";

export interface gifsProps {
  id: string;
  title: string;
  url: string;
}

export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=0nv6zt6rQOVmnRZ4lXXTh1hDdPk81XuJ&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs: gifsProps = data.map((img: DataResponse) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));
  return gifs;
};
