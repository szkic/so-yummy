import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import UserLogoModal from "./UserLogoModal";

const UserLogo = () => {
  return (
    <div className="flex items-center gap-4 tablet:mr-7">
      {/* Popover powinien zamknąć się po otwarciu modala */}
      <Popover>
        <PopoverHandler>
          <Button className="font-Poppins flex items-center gap-4 bg-transparent p-0 text-xs font-normal normal-case leading-5 text-secondary-color shadow-none hover:bg-transparent hover:shadow-none tablet:text-sm">
            <img
              className="h-[34px] w-[34px] rounded-full tablet:h-11 tablet:w-11"
              src="/../assets/images/user-logo-temp.png"
              alt="avatar"
            />
            <span>Marta</span>
          </Button>
        </PopoverHandler>
        <PopoverContent className="h-[130px] w-[161px] border-[1px] border-primary-color p-[18px] tablet:h-[134px] tablet:w-[177px]">
          <UserLogoModal />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default UserLogo;
