import React from "react";
import Image from "next/image";

const RecipeCard = ({ data, displayAll }) => {
  const displayHideCategories = (index) => {
    if (index === 1) return "hidden tablet:flex";
    if (index > 1) return "hidden desktop:flex";
  };

  return (
    <div className="flex flex-wrap gap-8 desktop:gap-3.5">
      {data.map((el, index) => (
        <div
          className={`relative flex justify-center ${
            !displayAll && displayHideCategories(index)
          }`}
          key={el._id}
        >
          <Image
            src={el.thumb}
            width={343}
            height={323}
            alt={el.description}
            className="h-auto rounded-lg tablet:w-[336px] desktop:w-[300px]"
          />
          <div className="absolute bottom-6 flex h-[52px] w-[300px] items-center rounded-lg bg-primary-text-color p-4 font-medium leading-5 desktop:w-[268px]">
            {el.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeCard;
