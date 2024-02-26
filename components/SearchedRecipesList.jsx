import Image from "next/image";
import RecipeCard from "./RecipeCard";

const SearchedRecipesList = ({ data }) => {
  return (
    <>
      <div className="mt-12 flex flex-col items-center">
        {data.length === 0 ? (
          <div>
            <Image
              src="/../assets/images/search-empty.png"
              width={208}
              height={133}
              priority={true}
              alt="search not found"
              className="tablet:h-auto tablet:w-[350px]"
            />
            <p className="mt-6 text-center text-sm font-medium opacity-50 tablet:mt-8 tablet:text-2xl">
              Try looking for something else...
            </p>
          </div>
        ) : (
          <RecipeCard data={data} displayAll={true} />
        )}
      </div>
    </>
  );
};

export default SearchedRecipesList;
