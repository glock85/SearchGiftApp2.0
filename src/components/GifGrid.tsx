import { gifsProps } from "../helpers/getGifts";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifts } from "../hooks/useFetchGifts";
import { LoadingIndicator } from "./LoadingIndicator";

interface GifGridProps {
  category: string;
}

export const GifGrid = ({ category }: GifGridProps) => {
  const { images, isLoading } = useFetchGifts(category);
  if (isLoading) return <LoadingIndicator />;
  return (
    <>
      {images.map((img: gifsProps) => (
        <GifGridItem key={img.id} {...img} />
      ))}
    </>
  );
};
