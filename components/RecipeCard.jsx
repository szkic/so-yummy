import React from "react";
import Image from "next/image";
import Link from "next/link";
import PLACEHOLDER_IMAGE from "../public/assets/images/img_placeholder.png";

const RecipeCard = ({ data, displayAll, pagination }) => {
  const displayHideCategories = (index) => {
    if (index === 1) return "hidden tablet:flex";
    if (index > 1) return "hidden desktop:flex";
  };

  const renderRecipeCard = (el, index) => {
    return (
      <Link href={`/recipe/${el._id}`} key={el._id}>
        <div
          className={`relative flex justify-center ${
            !displayAll && displayHideCategories(index)
          }`}
        >
          {!el.thumb ? (
            <Image
              src={PLACEHOLDER_IMAGE}
              width={343}
              height={323}
              alt={el.description}
              className="h-auto rounded-lg tablet:w-[336px] desktop:w-[300px]"
            />
          ) : (
            <Image
              src={el.thumb}
              width={343}
              height={323}
              alt={el.description}
              className="h-auto rounded-lg tablet:w-[336px] desktop:w-[300px]"
            />
          )}
          <div className="absolute bottom-6 flex h-[52px] w-[300px] items-center rounded-lg bg-primary-text-color p-4 font-medium leading-5 dark:bg-secondary-light-color desktop:w-[268px]">
            {el.title}
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="flex flex-wrap gap-8 desktop:gap-3.5">
      {pagination
        ? data.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group.data.map((el, index) => renderRecipeCard(el, index))}
            </React.Fragment>
          ))
        : data.map((el, index) => renderRecipeCard(el, index))}
    </div>
  );
};

export default RecipeCard;
