"use client";

import React, { useState } from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import UserLogoModal from "./UserLogoModal";
import { useSession } from "next-auth/react";

const UserLogo = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex items-center gap-4 tablet:mr-7">
      <Popover open={open} handler={handleOpen}>
        <PopoverHandler>
          <Button
            className="flex items-center gap-4 bg-transparent p-0 font-Poppins text-xs font-normal normal-case leading-5 text-secondary-color shadow-none hover:bg-transparent hover:shadow-none tablet:text-sm"
            aria-label="User"
          >
            <img
              className="h-[34px] w-[34px] rounded-full tablet:h-11 tablet:w-11"
              src="/../assets/images/user-logo-temp.png"
              alt="avatar"
            />
            <span>{session.user.name}</span>
          </Button>
        </PopoverHandler>
        <PopoverContent className="h-[130px] w-[161px] border-[1px] border-primary-color p-[18px] tablet:h-[134px] tablet:w-[177px]">
          <UserLogoModal handlePopover={handleClose} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default UserLogo;
