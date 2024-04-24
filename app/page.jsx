import Main from "@components/Main";
import Image from "next/image";
import React from "react";
import BG2 from "../public/assets/images/bg2.png";

const MainPage = () => {
  return (
    <>
      {/* do poprawnienia obrazki na tablet i desktop - za mała rozdzielczość */}
      <Image
        src={BG2}
        width={269}
        height={678}
        alt="bg1"
        className="absolute right-0 z-[-2] tablet:top-[-0px] tablet:h-[640px] tablet:w-[332px] desktop:h-[689px] desktop:w-[725px]"
      />
      <Image
        src="/../assets/images/pasta-spinach.png"
        width={40}
        height={40}
        alt="spinach"
        className="absolute left-0 top-[10px] z-[-2] h-auto w-auto tablet:top-0 tablet:h-[300px] tablet:w-[50px]"
      />
      <Image
        src="/../assets/images/pasta-spinach-2.png"
        width={519}
        height={792}
        alt="spinach2"
        className="absolute right-0 top-[-20px] z-[-2] h-auto tablet:top-[-200px] tablet:w-[450px]"
      />

      <Main />
    </>
  );
};

export default MainPage;
