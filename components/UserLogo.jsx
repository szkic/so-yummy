import React from "react";

const UserLogo = () => {
  return (
    <div className="flex items-center gap-4 tablet:mr-7">
      <img
        className="h-[34px] w-[34px] rounded-full tablet:h-11 tablet:w-11"
        src="/../assets/images/user-logo-temp.png"
        alt="avatar"
      />
      <span className="text-xs font-semibold leading-5 tablet:text-sm">
        Marta
      </span>
    </div>
  );
};

export default UserLogo;
