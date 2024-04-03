import { FaRegTrashAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const RecipeItem = ({ recipe, theme, onDelete }) => {
  return (
    <div className="rounded-lg bg-input-primary px-3.5 py-2.5 dark:bg-secondary-light-color tablet:px-6 tablet:py-7 desktop:p-10 ">
      <div className="relative flex gap-4  tablet:gap-6 desktop:gap-14">
        <Image
          src={recipe.thumb}
          width={124}
          height={124}
          alt="img"
          className="h-auto rounded-lg tablet:w-[228px] desktop:w-[318px]"
        />
        <div
          className={`absolute right-0 top-0 rounded  ${
            theme === "my" && "bg-primary-color"
          } ${
            theme === "favorites" &&
            "bg-light-primary-color dark:bg-secondary-dark-color"
          } p-1.5 tablet:p-2 desktop:p-2.5`}
        >
          <FaRegTrashAlt
            className={`${
              theme === "my" && "text-input-primary"
            } cursor-pointer tablet:h-5 tablet:w-5 desktop:h-6 desktop:w-6`}
            size="14px"
            onClick={() => onDelete(recipe._id)}
          />
        </div>

        <div className="relative">
          <div className="max-w-[163px] tablet:max-w-[404px] desktop:max-w-[806px]">
            <h4 className="max-w-[143px] overflow-hidden text-ellipsis whitespace-nowrap pt-1.5 text-sm font-medium tablet:max-w-none tablet:pt-0 tablet:text-2xl">
              {recipe.title}
            </h4>
            <p className="mt-3.5 h-10 overflow-hidden text-[8px] leading-[10px] tablet:mt-7 tablet:h-32 tablet:text-sm tablet:leading-5 desktop:mt-10 desktop:h-40 desktop:text-lg desktop:leading-6">
              <span className="line-clamp-4 tablet:line-clamp-5 desktop:line-clamp-6">
                {recipe.description}
              </span>
            </p>
          </div>
          <span className="absolute bottom-0 left-0 text-[10px] tablet:text-sm">
            20 min
          </span>
        </div>
        <Link href={`/recipe/${recipe._id}`}>
          <button
            className={`absolute bottom-0 right-0 rounded-lg rounded-bl-[35px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[35px] ${
              theme === "my" && "bg-primary-color"
            } ${
              theme === "favorites" &&
              "bg-secondary-color dark:bg-primary-color"
            } px-4 py-1.5 text-[10px] text-white hover:bg-secondary-light-color focus:outline-none focus:ring-4 focus:ring-secondary-light-color tablet:px-8 tablet:py-3 tablet:text-sm desktop:px-11 desktop:py-4 desktop:text-base`}
            aria-label="See recipe"
          >
            See recipe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeItem;
