import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const ChooseYourBreakfast = () => {
  return (
    <div className="mb-28 flex w-56 flex-col rounded-lg bg-primary-text-color p-2 tablet:absolute tablet:right-0 tablet:mb-0 tablet:w-[265px] tablet:p-3 desktop:bottom-[200px] desktop:right-24 desktop:w-[300px] desktop:p-4">
      <p className="text-xs font-medium tablet:text-sm">
        <span className="text-primary-color">Delicious and healthy</span> way to
        enjoy a variety of fresh ingredients in one satisfying meal
      </p>

      <Link href={`/categories/breakfast`} className="ml-auto mt-2 text-[10px]">
        See recipes <ArrowRightIcon className="inline h-[18px]" />
      </Link>
    </div>
  );
};

export default ChooseYourBreakfast;
