import Image from "next/image";
import React from "react";
import vegetables from "../../../public/assets/images/vegetables.png";

const page = () => {
  return (
    <>
      <div className="flex justify-center">
        <Image
          src={vegetables}
          alt="vegetables"
          className="absolute left-0 top-0 -z-10 h-[455px] w-full object-cover tablet:h-[495px]"
        />

        <div className="flex max-w-[300px] flex-col items-center pb-24 pt-8 tablet:max-w-[506px] tablet:pt-7 desktop:max-w-[656px] desktop:pt-12">
          <h2 className="text-center text-2xl font-semibold text-primary-color tablet:text-5xl">
            Salmon Avocado Salad
          </h2>
          <p className="mt-4 text-center text-xs tablet:text-lg">
            Is a healthy salad recipe that’s big on nutrients and flavor. A
            moist, pan seared salmon is layered on top of spinach, avocado,
            tomatoes, and red onions. Then drizzled with a homemade lemon
            vinaigrette.
          </p>
          <button className="mt-6 text-[10px] tablet:text-base">
            Add to favorite recipes
          </button>
          <p className="mt-10 text-[10px] font-medium tablet:text-sm">20 min</p>
        </div>
      </div>
    </>
  );
};

export default page;
