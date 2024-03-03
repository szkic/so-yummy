import React, { useState } from "react";
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { PencilIcon } from "@heroicons/react/24/outline";
import UserInfoModal from "./UserInfoModal";
import LogoutBtn from "./LogoutBtn";

const UserLogoModal = ({ handlePopover }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);

  const handleOpenEdit = () => setOpenEdit(!openEdit);
  const handleOpenLogout = () => setOpenLogout(!openLogout);
  const closeModalEdit = () => setOpenEdit(false);
  const closeModalLogout = () => setOpenLogout(false);

  return (
    <>
      <button
        className="mb-7 flex w-full items-center justify-between text-secondary-color"
        onClick={handleOpenEdit}
        aria-label="Edit profile"
      >
        <p className="font-medium">Edit profile</p>
        <PencilIcon className="h-3.5 w-3.5" />
      </button>
      <Button
        className="flex gap-1 rounded-bl-[35px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[35px] bg-primary-color px-6 py-3 text-sm font-normal normal-case tablet:rounded-bl-[70px] tablet:rounded-br-[30px] tablet:rounded-tl-[30px] tablet:rounded-tr-[70px] tablet:px-8 "
        onClick={handleOpenLogout}
        aria-label="Log out"
      >
        <span>Log out</span>
        <ArrowRightIcon className="h-[18px] w-[18px]" />
      </Button>

      <Dialog
        open={openEdit}
        size={"xs"}
        handler={handleOpenEdit}
        className="min-w-[330px] max-w-[330px] rounded-[30px] tablet:min-w-[480px] tablet:max-w-[480px] desktop:min-w-[500px] desktop:max-w-[500px]"
      >
        <DialogBody className="px-6 py-8 tablet:px-10 tablet:py-[50px]">
          <UserInfoModal
            handleClose={closeModalEdit}
            handlePopover={handlePopover}
          />
        </DialogBody>
      </Dialog>

      <Dialog
        open={openLogout}
        handler={handleOpenLogout}
        className="min-w-[330px] max-w-[330px] rounded-[30px] tablet:min-w-[480px] tablet:max-w-[480px] desktop:min-w-[500px] desktop:max-w-[500px]"
      >
        <DialogBody className="px-6 py-11 tablet:px-10 tablet:py-[50px]">
          <LogoutBtn
            handleClose={closeModalLogout}
            handlePopover={handlePopover}
          />
        </DialogBody>
      </Dialog>
    </>
  );
};

export default UserLogoModal;
