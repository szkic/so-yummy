import ChooseYourBreakfast from "@components/ChooseYourBreakfast";
import Search from "@components/Search";
import Image from "next/image";
import React from "react";

const MainPage = () => {
  return (
    <>
      <Image
        src="/../assets/images/bg2.png"
        width={269}
        height={678}
        alt="bg1"
        className="absolute right-0 z-[-2] tablet:top-[-0px] tablet:h-[640px] tablet:w-[332px]"
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

      {/* usunąć tablet:pb-48 */}
      <section className="relative flex flex-col flex-wrap items-end tablet:flex-row tablet:pb-48">
        <Image
          src="/../assets/images/bowl.png"
          width={320}
          height={296}
          alt="bowl"
          className="absolute z-[-1] mt-[210px] h-auto w-auto tablet:right-[-50px] tablet:top-[-170px] tablet:w-[378px]"
        />

        <div className="mb-40 flex flex-col items-center gap-3.5 tablet:mb-8 tablet:mt-24 tablet:items-start tablet:gap-6">
          <h1 className="text-center text-6xl tablet:text-7xl desktop:text-[100px]">
            <span className="text-primary-color">So</span>Yummy
          </h1>

          <p className="w-64 text-center text-sm tablet:w-[362px] tablet:text-left tablet:leading-6 desktop:w-[465px] desktop:text-lg">
            "What to cook?" is not only a recipe app, it is, in fact, your
            cookbook. You can add your own recipes to save them for the future.
          </p>
        </div>
        <ChooseYourBreakfast />
        <Search />
      </section>
    </>
  );
};

export default MainPage;
