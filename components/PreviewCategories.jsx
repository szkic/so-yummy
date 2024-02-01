import Image from "next/image";
import React from "react";

const categories = ["breakfast", "miscellaneous", "chicken", "desserts"];

const PreviewCategories = () => {
  return (
    <section className="pt-16">
      <div className="flex flex-col items-start">
        <h2 className="mb-8 text-3xl font-semibold">Breakfast</h2>
        <div className="flex gap-8 desktop:gap-3.5">
          <div className="relative mb-6 flex justify-center">
            <Image
              src="/../assets/images/temp_photo.png"
              width={343}
              height={323}
              alt="food image"
              className="tablet:h-[323px] tablet:w-[336px] desktop:h-[323px] desktop:w-[300px]"
            />
            <div className="absolute bottom-6 h-[52px] w-[300px] rounded-lg bg-primary-text-color p-4 font-medium leading-5 desktop:w-[268px]">
              Banana pancakes
            </div>
          </div>
          <div className="relative mb-6 hidden justify-center tablet:flex">
            <Image
              src="/../assets/images/temp_photo.png"
              width={343}
              height={323}
              alt="food image"
              className="tablet:h-[323px] tablet:w-[336px] desktop:h-[323px] desktop:w-[300px]"
            />
            <div className="absolute bottom-6 h-[52px] w-[300px] rounded-lg bg-primary-text-color p-4 font-medium leading-5 desktop:w-[268px]">
              Banana pancakes
            </div>
          </div>
          <div className="relative mb-6 hidden justify-center desktop:flex">
            <Image
              src="/../assets/images/temp_photo.png"
              width={343}
              height={323}
              alt="food image"
              className="tablet:h-[323px] tablet:w-[336px] desktop:h-[323px] desktop:w-[300px]"
            />
            <div className="absolute bottom-6 h-[52px] w-[300px] rounded-lg bg-primary-text-color p-4 font-medium leading-5 desktop:w-[268px]">
              Banana pancakes
            </div>
          </div>
          <div className="relative mb-6 hidden justify-center desktop:flex">
            <Image
              src="/../assets/images/temp_photo.png"
              width={343}
              height={323}
              alt="food image"
              className="tablet:h-[323px] tablet:w-[336px] desktop:h-[323px] desktop:w-[300px]"
            />
            <div className="absolute bottom-6 h-[52px] w-[300px] rounded-lg bg-primary-text-color p-4 font-medium leading-5 desktop:w-[268px]">
              Banana pancakes
            </div>
          </div>
        </div>
        <button className="ml-auto rounded-md bg-primary-color px-6 py-2.5 text-sm text-primary-text-color">
          See all
        </button>
      </div>
    </section>
  );
};

export default PreviewCategories;
