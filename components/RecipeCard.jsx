import React from "react";
import Image from "next/image";

const RecipeCard = ({ el, index }) => {
  const displayHideCategories = (index) => {
    if (index === 1) return "hidden tablet:flex";
    if (index > 1) return "hidden desktop:flex";
  };

  return (
    <div
      className={`relative flex justify-center ${displayHideCategories(index)}`}
    >
      <Image
        src={el.thumb}
        width={343}
        height={323}
        alt={el.description}
        className="h-auto rounded-lg tablet:w-[336px] desktop:w-[300px]"
      />
      <div className="absolute bottom-6 h-[52px] w-[300px] rounded-lg bg-primary-text-color p-4 font-medium leading-5 desktop:w-[268px]">
        {el.title}
      </div>
    </div>
  );
};

export default RecipeCard;
