import Image from "next/image";

const SearchedRecipesList = () => {
  return (
    <>
      <div className="mt-12">
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
    </>
  );
};

export default SearchedRecipesList;
