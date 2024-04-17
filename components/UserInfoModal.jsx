import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import axios from "axios";
import { useSession } from "next-auth/react";

const UserInfoModal = ({ handleClose, handlePopover }) => {
  const [newName, setNewName] = useState("");
  const [image, setImage] = useState("adsada");
  const { data: session, update } = useSession();

  const user = session.user.email;

  // console.log("session", session);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newName || !image) return;

    try {
      const response = await axios.put("/api/update-user", {
        user,
        newName,
        image,
      });
      console.log("response", response.data);

      // jeśli new name jest puste to niech nie zmienia
      update({ ...session.user, name: newName });

      // tutaj bedzie zmiana zdjecia jeśli nie bedzie puste
      // if (image) {
      //   update({ ...session.user, image });
      // }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <label htmlFor="imageInput">
        <div className="relative mb-[54px] cursor-pointer">
          <Image
            src={session.user.image}
            width={88}
            height={88}
            alt="leaves"
            className="rounded-full"
          />

          <Image
            src="/../assets/images/plus.svg"
            width={24}
            height={24}
            alt="leaves"
            className="absolute bottom-[-6px] right-3"
          />
        </div>
      </label>

      <input
        type="file"
        id="imageInput"
        className="hidden"
        // onChange={(e) => setImage(e.target.files?.[0])}
      />

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
            onChange={(e) => setNewName(e.target.value)}
          />
        </FormControl>
      </div>

      <Button
        className="h-[49px] w-full rounded-md bg-primary-color font-Poppins text-sm font-normal normal-case text-primary-text-color transition-colors duration-300 ease-in-out hover:bg-[#6c8828] tablet:h-[59px] tablet:text-base"
        aria-label="Save changes"
        type="submit"
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
    </form>
  );
};

export default UserInfoModal;
