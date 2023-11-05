import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const onNewCategory = (category: string) => {
    if (categories.includes(category)) return;
    setCategories([category, ...categories]);
  };
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h1 className="text-3xl font-bold  text-center mt-5 mb-5 text-gray-900 dark:text-white">
        Search Gift
      </h1>
      {/* Search Input */}
      <AddCategory onNewCategory={onNewCategory} />
      {/* List of Categories */}
      <div className="flex flex-wrap justify-center mt-10 gap-5">
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </div>
  );
};
