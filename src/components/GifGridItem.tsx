interface GifGridItemProps {
  title: string;
  url: string;
}

export const GifGridItem = ({ title, url }: GifGridItemProps) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg object-cover w-full h-56 " src={url} alt="" />
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
      </div>
    </div>
  );
};
