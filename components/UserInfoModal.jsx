import React from "react";
import { Button } from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

const UserInfoModal = ({ handleClose, handlePopover }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-[54px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="88"
          height="88"
          viewBox="0 0 88 88"
          fill="none"
        >
          <circle cx="44" cy="44" r="44" fill="#D9D9D9" />
        </svg>

        <div className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M33.3327 35V31.6667C33.3327 29.8986 32.6303 28.2029 31.3801 26.9526C30.1298 25.7024 28.4341 25 26.666 25H13.3327C11.5646 25 9.86888 25.7024 8.61864 26.9526C7.36839 28.2029 6.66602 29.8986 6.66602 31.6667V35"
              stroke="#C4C4C4"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.0006 18.3333C23.6825 18.3333 26.6673 15.3486 26.6673 11.6667C26.6673 7.98477 23.6825 5 20.0006 5C16.3188 5 13.334 7.98477 13.334 11.6667C13.334 15.3486 16.3188 18.3333 20.0006 18.3333Z"
              stroke="#C4C4C4"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <Image
          src="/../assets/images/plus.svg"
          width={24}
          height={24}
          alt="leaves"
          className="absolute bottom-[-6px] right-3"
        />
      </div>

      {/* <div className="relative mb-6 w-full opacity-80 hover:opacity-100">
        <label htmlFor="email"></label>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 25"
            fill="none"
            className="h-[18px] w-[18px] tablet:h-6 tablet:w-6"
          >
            <g>
              <path
                d="M20 21.5C20 20.1044 20 19.4067 19.8278 18.8389C19.44 17.5605 18.4395 16.56 17.1611 16.1722C16.5933 16 15.8956 16 14.5 16H9.5C8.10444 16 7.40665 16 6.83886 16.1722C5.56045 16.56 4.56004 17.5605 4.17224 18.8389C4 19.4067 4 20.1044 4 21.5M16.5 8C16.5 10.4853 14.4853 12.5 12 12.5C9.51472 12.5 7.5 10.4853 7.5 8C7.5 5.51472 9.51472 3.5 12 3.5C14.4853 3.5 16.5 5.51472 16.5 8Z"
                stroke="#333333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
        <PencilIcon className="absolute right-3.5 top-[18px] h-[17px] w-[17px] text-secondary-color" />
        <input
          type="email"
          id="email"
          name="email"
          className="block h-12 w-full rounded-lg border border-secondary-color border-opacity-50 stroke-1 p-4 pl-[50px] font-Poppins text-sm  text-secondary-color outline-none placeholder:font-Poppins placeholder:text-sm placeholder:text-secondary-color focus:border-secondary-color  tablet:h-[58px] tablet:text-lg tablet:placeholder:text-lg"
          placeholder="Marta"
        />
      </div> */}

      <div className="relative mb-6 w-full opacity-80 hover:opacity-100">
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="input-with-icon-adornment">Name</InputLabel>
          <OutlinedInput
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
            label="Name"
          />
        </FormControl>
      </div>

      <Button
        className="h-[49px] w-full rounded-md bg-primary-color font-Poppins text-sm font-normal normal-case text-primary-text-color transition-colors duration-300 ease-in-out hover:bg-[#6c8828] tablet:h-[59px] tablet:text-base"
        aria-label="Save changes"
      >
        Save changes
      </Button>

      <div
        className="absolute right-[18px] top-[18px] cursor-pointer"
        onClick={() => {
          handleClose();
          handlePopover();
        }}
      >
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
    </div>
  );
};

export default UserInfoModal;
