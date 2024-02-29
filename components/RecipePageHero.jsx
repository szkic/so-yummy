import Image from "next/image";
import vegetables from "../public/assets/images/vegetables.png";

const RecipePageHero = () => {
  return (
    <div className="flex justify-center">
      <Image
        src={vegetables}
        alt="vegetables"
        className="absolute left-0 top-0 -z-10 h-[455px] w-full object-cover tablet:h-[495px]"
      />

      <div className="flex max-w-[300px] flex-col items-center pb-24 pt-8 tablet:max-w-[516px] tablet:pt-7 desktop:max-w-[656px] desktop:pt-12">
        <h2 className="text-center text-2xl font-semibold text-primary-color tablet:text-[44px]">
          Salmon Avocado Salad
        </h2>
        <p className="mt-4 text-center text-xs leading-4 tablet:mt-6 tablet:text-lg tablet:leading-6">
          Is a healthy salad recipe that’s big on nutrients and flavor. A moist,
          pan seared salmon is layered on top of spinach, avocado, tomatoes, and
          red onions. Then drizzled with a homemade lemon vinaigrette.
        </p>
        <button className="mt-6 rounded-bl-[35px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[35px] border-2 border-primary-color px-5 py-2.5 text-[10px] tablet:rounded-bl-[70px] tablet:rounded-br-[30px] tablet:rounded-tl-[30px] tablet:rounded-tr-[70px] tablet:px-11 tablet:py-5 tablet:text-base">
          Add to favorite recipes
        </button>
        <p className="mt-10 text-[10px] font-medium tablet:text-sm">20 min</p>
      </div>
    </div>
  );
};

export default RecipePageHero;
