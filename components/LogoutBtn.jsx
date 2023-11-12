import { Button } from "@material-tailwind/react";
import React from "react";

const LogoutBtn = () => {
  return (
    <>
      <p className="mb-6 text-center font-Poppins text-sm text-secondary-color tablet:mb-8 tablet:text-lg tablet:tracking-[-0.36px]">
        Are you sure you want to log out?
      </p>
      <div className="flex justify-between">
        <Button className="h-[49px] w-[137px] rounded-md bg-primary-color font-Poppins text-sm font-normal normal-case text-primary-text-color transition-colors duration-300 ease-in-out hover:bg-[#6c8828] tablet:h-[59px] tablet:w-[192px] tablet:text-base">
          Log out
        </Button>
        <Button className="h-[49px] w-[137px] rounded-md bg-inactive-color font-Poppins text-sm font-normal normal-case text-secondary-color transition-colors duration-300 ease-in-out hover:bg-inactive-text tablet:h-[59px] tablet:w-[192px] tablet:text-base">
          Cancel
        </Button>
      </div>

      <div className="absolute right-[18px] top-[18px] cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          strokeWidth={2}
          stroke="#333333"
          className="h-5 w-5 tablet:h-6 tablet:w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </>
  );
};

export default LogoutBtn;
