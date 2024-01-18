import Search from "@components/Search";
import React from "react";

const MainPage = () => {
  return (
    <section>
      {/* project desc */}
      <div className="flex flex-col items-center gap-3.5 tablet:items-start">
        <h1 className="text-center text-6xl tablet:text-7xl desktop:text-[100px]">
          <span className="text-primary-color">So</span>Yummy
        </h1>
        <p className="w-64 text-center text-sm tablet:w-[362px] tablet:text-left tablet:leading-6 desktop:w-[465px] desktop:text-lg">
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </p>
      </div>
      <Search />
    </section>
  );
};

export default MainPage;
