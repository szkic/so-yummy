import ChooseYourBreakfast from "@components/ChooseYourBreakfast";
import PreviewCategories from "@components/PreviewCategories";
import Search from "@components/Search";
import Image from "next/image";
// import bowl from "../public/assets/images/bowl.png";

const Main = () => {
  return (
    <>
      <section className="relative flex flex-col flex-wrap items-center pb-20 tablet:flex-row tablet:pb-48 desktop:px-14 desktop:pb-64">
        <Image
          src="/../assets/images/bowl.png"
          width={320}
          height={296}
          // src={bowl}
          alt="bowl"
          className="absolute z-[-1] mt-[210px] h-auto w-auto tablet:right-[-50px] tablet:top-[-170px] tablet:w-[378px] desktop:right-[150px] desktop:top-[-200px] desktop:w-[578px]"
        />

        <div className="mb-40 flex flex-col items-center gap-3.5 tablet:mb-8 tablet:mt-24 tablet:items-start tablet:gap-6 desktop:pr-96">
          <h1 className="text-center text-6xl tablet:text-7xl desktop:text-[100px]">
            <span className="text-primary-color">So</span>Yummy
          </h1>

          <p className="w-64 text-center text-sm tablet:w-[362px] tablet:text-left tablet:leading-6 desktop:w-[465px] desktop:text-lg">
            "What to cook?" is not only a recipe app, it is, in fact, your
            cookbook. You can add your own recipes to save them for the future.
          </p>
        </div>
        <div className="pl-20 tablet:pl-0">
          <ChooseYourBreakfast />
        </div>
        <Search />
      </section>

      <PreviewCategories />
    </>
  );
};

export default Main;
